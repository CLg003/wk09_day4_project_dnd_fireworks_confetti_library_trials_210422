import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Fireworks } from 'fireworks/lib/react';
import Confetti from 'react-confetti';



import DragDrop from './components/DragDrop';

function App() {

      return (
        <>
          <Confetti 
          numberOfPieces={400}
          gravity={0.05}
          />
          <h1 id="congratulations">You're a TrioLingo superstar!</h1>
          {/* // FIREWORKS TEST 1: */}
//         <Fireworks
                colors={['#7b2cbf', '#64c125', '#7b2cbf', '#64c125', '#7b2cbf']} 
                count={"5"} 
                interval={"1000"} 
                calc={(props, i) => ({
                    ...props,
                    x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
                    y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
                })}
            />
            {/* <h1 id="congratulations">You're a TrioLingo superstar!</h1> */}
        </>
      );
        


        // DRAG N DROP TEST:
    // return (
    // <DndProvider backend={HTML5Backend}>
    //   <div className="App">
    //     <DragDrop />
    //   </div>
    // </DndProvider>
  // );
}

export default App;
