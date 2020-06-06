import React, { useState } from "react";
import "./sass/App.scss";
import { FaPhone, FaShoppingCart } from "react-icons/fa";

function cakeimages() {
	var files = [
		{ filename: "sweets-1.jpeg", cost: "5$" },
		{ filename: "sweets-2.jpeg", cost: "15$" },
		{ filename: "sweets-3.jpeg", cost: "10$" },
		{ filename: "cake-1.jpeg", cost: "15$" },
		{ filename: "cake-2.jpeg", cost: "10$" },
		{ filename: "cake-3.jpeg", cost: "5$" },
		{ filename: "cupcake-1.jpeg", cost: "10$" },
		{ filename: "cupcake-2.jpeg", cost: "5$" },
		{ filename: "cupcake-3.jpeg", cost: "15$" },
		{ filename: "doughnut-1.jpeg", cost: "15$" },
		{ filename: "doughnut-2.jpeg", cost: "10$" },
		{ filename: "doughnut-3.jpeg", cost: "5$" },
	];
	files = shuffle(files);
	return files;
}
function shuffle(a) {
	let j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}

function App() {
	let cakeimgs = cakeimages();
	const [cakeSearch, setCakeSearch] = useState("");
	function changecake(name) {
		setCakeSearch(name);
	}
	return (
		<div className="App">
			<header className="App-header">
				<img src="images/logo.svg" alt="logo" className="logo" />
				<ul className="navbar">
					<li className="navitems">
						<a href="#home">Home</a>
					</li>
					<li className="navitems">
						<a href="#aboutcake">About</a>
					</li>
					<li className="navitems">
						<a href="#cakesection">Store</a>
					</li>
				</ul>
				<div className="nav2group">
					<div className="navphone">
						<FaPhone />
						<p>+ 123 456 789</p>
					</div>
					<div className="shoppingchart">
						<FaShoppingCart />
						<p> 2 items - $49.50</p>
					</div>
				</div>
			</header>
			<div className="background">
				<div>
					<span style={{ color: "white", fontSize: "3rem", fontFamily: "Kaushan Script, cursive" }}>
						Welcome To
					</span>{" "}
					<span
						style={{
							color: "#ef7998",
							fontSize: "4rem",
							fontFamily: "Kaushan Script, cursive",
						}}>
						<strong>Grandma's</strong>
					</span>
				</div>
				<div>
					<a href="#cakesection">
						<button className="explore" href="#cakesection">
							EXPLORE
						</button>
					</a>
				</div>
			</div>
			<div id="aboutcake" className="bigtitle">
				<div>
					<div className="leftheader">
						<div style={{ marginTop: "3rem" }}>
							<span
								style={{
									color: "black",
									fontSize: "3rem",
									fontFamily: "Kaushan Script, cursive",
								}}>
								About
							</span>{" "}
							<span
								style={{
									color: "#ef7998",
									fontSize: "4rem",
									fontFamily: "Kaushan Script, cursive",
								}}>
								<strong>Us</strong>
							</span>
						</div>
					</div>
					<div className="loremipsum">
						Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı
						bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak
						karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz
						yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de
						sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile
						ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık
						yazılımları ile popüler olmuştur.
					</div>
					<div>
						<a href="#cakesection">
							<button className="explore">EXPLORE</button>
						</a>
					</div>
				</div>
				<div>
					<div className="rightimage">
						<img
							src="images/sweets-1.jpeg"
							width="540px"
							height="400px"
							alt="cakes"
							className="sweetcake"
						/>
					</div>
				</div>
			</div>
			<div id="cakesection" className="ourstore">
				<div>
					<span style={{ color: "black", fontSize: "3rem", fontFamily: "Kaushan Script, cursive" }}>Our</span>{" "}
					<span
						style={{
							color: "#ef7998",
							fontSize: "4rem",
							fontFamily: "Kaushan Script, cursive",
						}}>
						<strong>Store</strong>
					</span>
				</div>
				<div className="cakebuttondivs">
					<button className="ourstorebutton" onClick={() => changecake("")}>
						ALL
					</button>
					<button className="ourstorebutton" onClick={() => changecake("cake")}>
						CAKES
					</button>
					<button className="ourstorebutton" onClick={() => changecake("cupcake")}>
						CUPCAKES
					</button>
					<button className="ourstorebutton" onClick={() => changecake("sweet")}>
						SWEETS
					</button>
					<button className="ourstorebutton" onClick={() => changecake("doughnut")}>
						DOUGHNUTS
					</button>
				</div>

				{/* This part lists cakes according to cakeSearch variable */}
				<div class="cardcontainer">
					{cakeimgs
						.filter((cake) => cake.filename.indexOf(cakeSearch) === 0)
						.map((cakes, ind) => (
							<div className="card">
								<div className="card-img-container">
									<img
										src={`${"images/cakes/" + cakes.filename}`}
										alt="cakes"
										className="cardimage"
									/>
									<FaShoppingCart />
								</div>
								<div className="carditems">
									<p>
										{cakes.filename.slice(0, cakes.filename.indexOf("-"))[0].toUpperCase() +
											cakes.filename.slice(1, cakes.filename.indexOf("-"))}{" "}
										Item
									</p>
									<p>{cakes.cost}</p>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}

export default App;
