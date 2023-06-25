import react,{createContext,useContext, useReducer} from "react";
import Players from "./Players";


 const PlayersContext= createContext({});
 const initialState = {Players};

 const playerActions={
    
    updatePlayer(state,action){
        const player = action.payload;
        const targetedPlayers = state.Players.map(u => u.name === player.name ? player : u);
        //SavePlayers(targetedPlayers)
        return{
            ...state,
            players: targetedPlayers,
        };
    },

 
    
 }

export const PlayersProvider = props => {
    function reducer(state,action){
        const fn = playerActions[action.type]
        return fn ? fn(state,action) : state
    }
    const [state,dispatch] = useReducer(reducer, initialState);
    return(
        <PlayersContext.Provider value={{state, dispatch}}>
            {props.children}
        </PlayersContext.Provider>
    )
}

export default PlayersContext