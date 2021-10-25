import React, { useContext } from "react";
import { TreesContext } from "../index.js";

function ShowTrees()
{
    const { trees } = useContext(TreesContext);

    return (
        <div>
            <h2>Trees</h2>
            {
                trees.map(tree =>
                {
                    return <li key={tree.id}>{tree.type}</li>
                })
            }
        </div>
    );
}


export default ShowTrees;