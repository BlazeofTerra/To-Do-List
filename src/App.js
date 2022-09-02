import './App.css';
import React, {useState} from "react";

export default function App() {
	const [todos, ToDos] = useState([
		{value: "Wake Up", order: 0},
		{value: "Eat", order: 1},
		{value: "Go Bed", order: 2}
	]);

	function moveTodo(direction, order) {
		if(!((order === 0 && direction === "up") || (order === (todos.length - 1) && direction === "down"))) {
			let move = 1;
			let movedMove = -1;
			let todoMove = todos[order];

			if(direction === "up") {
				move -= 2;
				movedMove += 2;
			}

			let moved = todos[order + move]

			todoMove.order = todoMove.order + move;
			moved.order = moved.order + movedMove;
			
			let newOrder = []
			let check = 0;

			todos.forEach(todo => {
				
			});

			ToDos([...todos, newOrder])
			console.log(moved)
		}
	}

	return (
		<div id="outerToDo">
			<div id="innerToDo">
				{todos.map((todo, index) => {
					return (
						<div key={index} className='todos'>
							<div className='buttons'>
								<button onClick={() => moveTodo("up", todo.order)}>↑</button>
								<button onClick={() => moveTodo("down", todo.order)}>↓</button>
								<button>E</button>
								<button>A</button>
								<button>D</button>
							</div>
							<p>{todo.value}</p>
						</div>
					)
				})}
			</div>
		</div>
	);
}