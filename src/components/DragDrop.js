import { useState } from "react";
import { useDrop } from "react-dnd";
import Picture from "./Picture";
import '../App.css';

const PictureList = [
    {
        id: 1,
        url: "https://www.pngkit.com/png/detail/227-2271292_graphic-transparent-garfield-transparent-pixel-garfield-fat-cat.png"
    },
    {
        id: 2,
        url: "https://www.kindpng.com/picc/m/146-1461046_transparent-background-garfield-transparent-hd-png-download.png"
    },
    {
        id: 3,
        url: "https://i.pinimg.com/736x/43/7e/f9/437ef929f7ae53ad702b383f098b0bfb.jpg"
    }
];

function DragDrop() {
    const [board, setBoard] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id) => {
        // console.log(id);
        const pictureList = PictureList.filter((picture) => id === picture.id);
        // TO ADD TO THE SELECTION OF DRAGGED ITEMS:
        setBoard((board) => [...board, pictureList[0]]);
        
        // TO REPLACE CURRENT ITEM WITH DRAGGED ITEM:
        // setBoard([pictureList[0]]);

    };

    return(
        <>
        <div className="pictures">
            {PictureList.map((picture) => {
                return <Picture url={picture.url} id={picture.id} key={picture.id}/>
            })}
        </div>
        <div className="board" ref={drop}>
            {board.map((picture) => {
                return <Picture url={picture.url} id={picture.id} key={picture.id}/>
            })}
        </div>

        </>
    );
}

export default DragDrop;

