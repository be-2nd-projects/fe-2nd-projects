import { createStore } from "redux";
// import Main from "../components/Main";
// import { initialperson } from "../components/Main";
import Home5 from "../../pages/Main/Home5"


const initialState = {
    selectTime :[],
    totalPrice : 0 ,
    selectIndex :[] ,
    payment :'',
    person:0,
    reserveDate: new Date()
}


const reserveReducer = (state=initialState,action)=>{
    switch(action.type) {
     

            case 'selectTime' :
                    const selectedIndex= action.payload.index
                    const selectedTime= action.payload.time
                    const pricepertime = action.payload.pricepertime
                    const pricepertimearray = Object.entries(pricepertime).map(([time, price]) => [time, price]);
                
                    state.selectIndex =[selectedIndex,...state.selectIndex]
                    const sortselectIndex = state.selectIndex.map(item => (item)).sort(function(a, b){ return a-b; });
                    if (state.selectIndex.length=== 2){
                        const reservestartindex = sortselectIndex[0]
                        const reserveEndindex = sortselectIndex[sortselectIndex.length-1]
                        for (let i=reservestartindex+1; i< reserveEndindex ;i++){                          
                            state.selectIndex.push(i)
                        }
                        for  (let i=sortselectIndex[0]; i< sortselectIndex[sortselectIndex.length-1]+1;i++){
                            state.selectTime.push(pricepertimearray[i][0])
                            state.totalPrice += pricepertimearray[i][1]
                        }
                    }
                    else if (state.selectIndex.length >=3){
                        state.selectIndex.length=0
                        state.selectTime.length=0
                        state.totalPrice =0
                    }
                    return{
                                ...state,
                                selectIndex:state.selectIndex,
                                selectTime:state.selectTime,
                                totalPrice: state.totalPrice
                            }  
                            
                    
            case 'selectpayment' :
                return{
                    ...state,
                   payment :action.payload.paymethod
                }

            case 'deleteperson' :
                if (state.person>0){
                    state.person =state.person-=1
                }
                else{
                    state.person =0
                }
                return{
                    ...state,
                    person: state.person
                }

            case 'addperson' :
                return{
                    ...state,
                    person:state.person+=1
                }

            case 'initializeselect':
                return{
                    ...state,
                    selectIndex:[],
                    selectTime:[],
                    totalPrice: 0
                }
            
            case 'selectdate' :
                return{
                    ...state,
                    reserveDate :action.payload
                }
            


            default:
                return state
    }

}

const store = createStore(reserveReducer);

export default store;


