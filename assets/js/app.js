


$(document).ready(function() {



    console.log("Conectado!");

    $("button").click(() => {
    let valor1 = document.getElementById("inputSuperHero").value;
    console.log(valor1);
    $.ajax({
        url: `https://superheroapi.com/api.php/953666262240615/${valor1}`,
        type: 'GET',
        DataType:'JSON',
        success(data){
        console.log('success');
        console.log(data);
        displayDatos(data)
        },
        error(e){
            console.log('Ocurrió un error.')
            console.log(e)
        }
    })
    });
   });

   
   const displayDatos = (data) => {

    $('#displaySH').append(`
    <h2>SuperHero encontrado!</h2>
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${data.image.url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-text">
        Nombre: ${data.name}
        <br>
        Conexiones:  ${data.connections['group-affiliation']}
        <br>
        Ocupación: ${data.work.occupation}
        <br>
        Primera aparición: ${data.biography['first-appearance']}
        <br>
        Altura: ${data.appearance.height}
        <br>
        Peso: ${data.appearance.weight}
        <br>
        Aliases: ${data.biography.aliases}
        <br>
        
        </p>
      </div>
    </div>
  </div>
</div>
    `)
    var chart = new CanvasJS.Chart("chartContainer",
	{
		theme: "light2",
		title:{
			text: `Estadísticas de poder para ${data.name}`
		},		
		data: [
		{       
			type: "pie",
			showInLegend: true,
			toolTipContent: "{y}",
			yValueFormatString: "#",
			legendText: "{indexLabel} ({y})",
			dataPoints: [
				{  y: data.powerstats.durability, indexLabel: "Durabilidad"},
				{  y: data.powerstats.power, indexLabel: "Poder" },
				{  y: data.powerstats.combat, indexLabel: "Combate" },
				{  y: data.powerstats.intelligence, indexLabel: "Inteligencia"},
				{  y: data.powerstats.strength, indexLabel: "Fortaleza" },
				{  y: data.powerstats.speed, indexLabel: "Velocidad"},
			]
		}
		]
	});
	chart.render();

   }