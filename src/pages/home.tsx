import React from "react";
import { Navbar } from "../components/navbar";
import { Input } from "../components/Input";
import { useAppDispatch } from "../redux/hook";
import { MovieActions } from "../redux/features/movie.slice";
import { ListMovies } from "../components/listMovie";

// interface IGenre {
//   comedy: string;
//   scary: string;
//   drama: string;
//   romantic: string;
// }
const validGenres = ["Action", "Comedy", "Drama", "Horror", "Romance", "Thriller"];

interface IInput {
  name: string;
  genre: string;
  score: number;
}

export const Home: React.FC = () => {
  const [values, setValues] = React.useState<IInput>({
    name: "",
    genre: "",
    score: 0,
  });

  const [isValid, setIsValid] = React.useState(false);
  const dispatch= useAppDispatch();

  const inputChangeHandler = (inputType: keyof IInput, value: string) => {
    const newValues = { ...values, [inputType]: value };
    setValues(newValues);
    validateForm(newValues);
  };

  const validateForm = (values: IInput) => {
    const isFormValid = Object.values(values).every(
      (value) => value.trim() !== ""
    )&& validGenres.includes(values.genre);
    setIsValid(isFormValid);
  };

  const submit = () => {
    if (isValid) {
    dispatch(MovieActions.addMovie(values));
    setValues({name:"",genre:"" ,score:0});
      console.log(values);
    } else {
      console.log("Form is not valid");
    }
  };

  return (
    <section className="bg-slate-100 w-full h-screen">
      <Navbar />
      <section>
        <div className="flex justify-center items-center gap-16 py-6">
          <Input
            placeholder="Movie name..."
            onChangeHandler={(value) => inputChangeHandler("name", value)}
            validator={(value) => value.length >= 3}
            Error="invalid name. More than 3 characters."
          />
          <Input
            placeholder="movie genre..."
            onChangeHandler={(value) => inputChangeHandler("genre", value)}
            validator={(value) => validGenres.includes(value)}
            Error="Choose valid genres \n('Action','Comedy','Drama','Horror', 'Romance', 'Thriller')."
          />
          <Input
            type="number"
            placeholder="Score..."
            onChangeHandler={(value) => inputChangeHandler("score", value)}
            validator={(value) => 0 <=parseInt(value) && parseInt(value) <=5 }
            Error="invalid score. More between 0 ,5 number."
          />
          <button
           onClick={submit}
           disabled={!isValid}
           className={`px-10 py-1.5 bg-green-600 rounded-md text-white font-semibold transition ease-linear delay-100 hover:bg-green-800 ${
             !isValid ? "disabled:bg-green-400" : "active: bg-green-600"
           }`}>
            Add
          </button>
        </div>

           <ListMovies />
        
      </section>
    </section>
  );
};
