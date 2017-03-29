	function Pokemon(nombre,color,puntosAtaque){
		this.nombre=nombre;
		this.color=color;
		this.nivelDeamistad =0;
		this.vida =100;
		this.puntosAtaque =puntosAtaque;


		this.saludar= function(){
			console.log("hola me llamo "+ this.nombre)
		};

		this.pelear= function(pokemonObjeto){
			pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque;
	    }


		this.beber = function(tipoAlcohol){
			if(tipoAlcohol == "chelas"){
			this.nivelDeamistad += 80;
		    }else if (tipoAlcohol =="vodka"){
			this.nivelDeamistad +=10;
		}

		};
	}
	var pokemones=[];

		function creaPokemon(){
			 var nombre=document.getElementById('nombrePokemon').value;
			 var color = document.getElementById("colorPokemon").value;
	         var poder = document.getElementById("puntosAtaque").value;

	     var pokemon = new Pokemon(nombre, color, parseInt(poder));
	     pokemones.push(pokemon);
	    mostrarPokemones();
	}
	  var selectlista = document.createElement("select");
	function mostrarPokemones(){
	    var listaPokemones = document.getElementById("listaPokemones");
			var option=document.createElement("option")


	    selectlista.id="mySelect";
	    //listaPokemones.appendChild(selectlista);
	     //var elemento = document.createElement("li");

	          //listaPokemones="";
	    pokemones.forEach(function(pokemon){

	    option.setAttribute=("value", pokemon.nombre );
	    option.text=pokemon.nombre;
	    selectlista.appendChild(option);

	  });
	listaPokemones.appendChild(selectlista);
	}

	var selectlista2 = document.createElement("select");
	function mostrarPokemones2(){
		var listaPokemones = document.getElementById("copialista");
		var option=document.createElement("option")


		selectlista2.id="mySelect2";
		//listaPokemones.appendChild(selectlista);
		 //var elemento = document.createElement("li");

					//listaPokemones="";
		pokemones.forEach(function(pokemon){

		option.setAttribute=("value", pokemon.nombre );
		option.text=pokemon.nombre;
		selectlista2.appendChild(option);

	});
	listaPokemones.appendChild(selectlista2);
	}

	function dimePropiedades(){
		   	var indice = document.getElementById("mySelect").selectedIndex
	    var texto=document.getElementById("mySelect").options[indice].text

			var indice2 = document.getElementById("mySelect2").selectedIndex
	    var texto2=document.getElementById("mySelect2").options[indice2].text
	var valor=document.getElementById("mySelect").options[indice].value;
	var ataque =valor.puntosAtaque;
			var vida=[indice].puntosAtaque;
			document.getElementById("peleadores").innerHTML=texto + " ataco a "+texto2 + " y "+ texto2+ " tiene "+vida;
	alert(ataque)
	}



	var pikachu =new Pokemon("Pikachu","amarillo",80)
	var charmander = new Pokemon("charmander","rojo",30);

	console.log(pikachu);
	console.log(charmander);
	pikachu.pelear(charmander);
	console.log(charmander.vida)
