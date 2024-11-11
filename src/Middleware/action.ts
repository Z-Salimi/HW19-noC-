export const INC = 'INC';
export const DEC = 'DEC';

interface IncrementAction {
  type: typeof INC;
}

interface DecrementAction {
  type: typeof DEC;
}

export const increment = (): IncrementAction => ({ type: INC });
export const decrement = (): DecrementAction => ({ type: DEC });

export type ActionTypes = IncrementAction | DecrementAction;
