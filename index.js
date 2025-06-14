function teste() { 
    alert("ola, mundo")
}

function gerar(){
    var nome1 = document.getElementById("nome").value
    var matricula1 = document.getElementById("matricula").value
    var cargo1 = document.getElementById("cargo").value
    var femea  = document.getElementsByClassName("Fe")
    var masc1 = document.getElementsByClassName("Ma")
    
    if(femea[0].checked){
        //COMPRA DE CELULAR
        var vazio = document.getElementById("vazio")
        var teste = document.getElementById("tes")
        var div = document.getElementById("infonome")
        var p = document.getElementById("corpo")
        var desp = document.getElementById("despedida")
        var compr = document.getElementById("compr")
        div.append("COMPRA DE CELULAR - "+ nome1)
        compr.append("Prezado(a),")
        p.append("Venho por meio desta solicitar a compra de celular da colaboradora "+nome1+" matrícula "+matricula1+ " ,para que a mesma possa desempenhas suas atividades como "+ cargo1)
        desp.append("Att,")

        //CSS
        teste.style.width="400px"
        teste.style.height="500px"
        teste.style.overflow="scroll"
        teste.style.display="flex"
        teste.style.flexDirection="column"
        teste.style.justifyContent="space-evenly"
        teste.style.padding="20px"
        teste.style.backgroundColor="white"
        teste.style.boxShadow="5px 5px 10px 2px rgba(0,0,0,0.5)"
        teste.style.borderRadius="10px"
        teste.style.fontFamily="Arial, Helvetica, sans-serif"
        teste.style.color="#081C28"
        div.style.width="auto"
        div.style.height="auto"
        vazio.style.display="none"

        //VARIAVES COMPRA DE CHIP


        var div2 = document.getElementById("infonome2")
        var p2 = document.getElementById("corpo2")
        var desp2 = document.getElementById("despedida2")
        var compr2 = document.getElementById("compr2")
        div2.append("COMPRA DE CHIP - "+ nome1)
        compr2.append("Prezado(a),")
        p2.append("Venho por meio desta solicitar a compra de chip da colaboradora "+nome1+" matrícula "+matricula1+ " ,para que a mesma possa desempenhas suas atividades como "+ cargo1)
        desp2.append("Att,")

        //COMPRA DE NOTEBOOK 

        var div3 = document.getElementById("infonome3")
        var p3 = document.getElementById("corpo3")
        var desp3 = document.getElementById("despedida3")
        var compr3 = document.getElementById("compr3")
        div3.append("COMPRA DE NOTEBOOK - "+ nome1)
        compr3.append("Prezado(a),")
        p3.append("Venho por meio desta solicitar a compra do notebook da colaboradora "+nome1+" matrícula "+matricula1+ " ,para que a mesma possa desempenhas suas atividades como "+ cargo1)
        desp3.append("Att,")

        
    }

    if(masc1[0].checked){

        //COMPRA DE CELULAR
        var vazio = document.getElementById("vazio")
        var teste = document.getElementById("tes")
        var div = document.getElementById("infonome")
        var p = document.getElementById("corpo")
        var desp = document.getElementById("despedida")
        var compr = document.getElementById("compr")
        div.append("COMPRA DE CELULAR - "+ nome1)
        compr.append("Prezado(a),")
        p.append("Venho por meio desta solicitar a compra de celular do colaborador "+nome1+" matrícula "+matricula1+ " ,para que o mesmo possa desempenhas suas atividades como "+ cargo1)
        desp.append("Att,")

        //CSS
        teste.style.width="400px"
        teste.style.height="500px"
        teste.style.overflow="scroll"
        teste.style.display="flex"
        teste.style.flexDirection="column"
        teste.style.justifyContent="space-evenly"
        teste.style.padding="20px"
        teste.style.backgroundColor="white"
        teste.style.boxShadow="5px 5px 10px 2px rgba(0,0,0,0.5)"
        teste.style.borderRadius="10px"
        teste.style.fontFamily="Arial, Helvetica, sans-serif"
        teste.style.color="#081C28"
        div.style.width="auto"
        div.style.height="auto"
        vazio.style.display="none"

        //VARIAVES COMPRA DE CHIP


        var div2 = document.getElementById("infonome2")
        var p2 = document.getElementById("corpo2")
        var desp2 = document.getElementById("despedida2")
        var compr2 = document.getElementById("compr2")
        div2.append("COMPRA DE CHIP - "+ nome1)
        compr2.append("Prezado(a),")
        p2.append("Venho por meio desta solicitar a compra de chip do colaborador "+nome1+" matrícula "+matricula1+ " ,para que o mesmo possa desempenhas suas atividades como "+ cargo1)
        desp2.append("Att,")

        //COMPRA DE NOTEBOOK 

        var div3 = document.getElementById("infonome3")
        var p3 = document.getElementById("corpo3")
        var desp3 = document.getElementById("despedida3")
        var compr3 = document.getElementById("compr3")
        div3.append("COMPRA DE NOTEBOOK - "+ nome1)
        compr3.append("Prezado(a),")
        p3.append("Venho por meio desta solicitar a compra do notebook do colaborador "+nome1+" matrícula "+matricula1+ " ,para que o mesmo possa desempenhas suas atividades como "+ cargo1)
        desp3.append("Att,")

    


        
    }
   

    






    
    
}