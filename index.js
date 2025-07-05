function teste() { 
    alert("ola, mundo")
}

function gerar(){
    var nome1 = document.getElementById("nome").value
    var matricula1 = document.getElementById("matricula").value
    var cargo1 = document.getElementById("cargo").value
    var femea  = document.getElementsByClassName("Fe")
    var masc1 = document.getElementsByClassName("Ma")
    var serie1 = document.getElementById('serie').value
    
    if(femea[0].checked){
        //COMPRA DE CELULAR
        var vazio = document.getElementById("vazio")
        var teste = document.getElementById("tes")
        var div = document.getElementById("infonome")
        var p = document.getElementById("corpo")
        var desp = document.getElementById("despedida")
        var compr = document.getElementById("compr")
        div.append("COMPRA DE CELULAR - "+ nome1.toUpperCase())
        compr.append("Prezado(a),")
        p.append("Venho por meio desta solicitar a compra de celular da colaboradora "+nome1+" matrícula "+matricula1+ " ,para que a mesma possa desempenhar suas atividades como "+ cargo1+".")
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
        div2.append("COMPRA DE CHIP - "+ nome1.toUpperCase())
        compr2.append("Prezado(a),")
        p2.append("Venho por meio desta solicitar a compra de chip da colaboradora "+nome1+" matrícula "+matricula1+ " ,para que a mesma possa desempenhar suas atividades como "+ cargo1+".")
        desp2.append("Att,")

        //COMPRA DE NOTEBOOK 

        var div3 = document.getElementById("infonome3")
        var p3 = document.getElementById("corpo3")
        var desp3 = document.getElementById("despedida3")
        var compr3 = document.getElementById("compr3")
        div3.append("COMPRA DE NOTEBOOK - "+ nome1.toUpperCase())
        compr3.append("Prezado(a),")
        p3.append("Venho por meio desta solicitar a compra do notebook da colaboradora "+nome1+" matrícula "+matricula1+ " ,para que a mesma possa desempenhar suas atividades como "+ cargo1+".")
        desp3.append("Att,")

        //AUTORIZAÇÃO SENHA DE ABASTECIMENTO

        var div4 = document.getElementById("infonome4")
        var p4 = document.getElementById("corpo4")
        var desp4 = document.getElementById("despedida4")
        var compr4 = document.getElementById("compr4")
        var desp42 = document.getElementById("despedida42")
        div4.append("AUTORIZAÇÃO PARA SENHA DE ABASTECIMENTO - "+ nome1.toUpperCase())
        compr4.append("Prezado(a),")
        p4.append("Solicito, por gentileza, a autorização para emissão de senha de abastecimento em nome da colaboradora "+nome1+ ", matrícula "+matricula1+" , visando o desempenho de suas atividades como "+cargo1+".")
        desp42.append("Agradeço pela atenção e coloco-me à disposição para eventuais esclarecimentos.")
        desp4.append("Att,")


        //CADASTRO DE CONDUTOR NEXTFLEET

        var div5 = document.getElementById("infonome5")
        var p5 = document.getElementById("corpo5")
        var desp5 = document.getElementById("despedida5")
        var compr5 = document.getElementById("compr5")
        var desp43 = document.getElementById("despedida43")
        div5.append("SOLICITAÇÃO DE CADASTRO DE CONDUTOR- NEXTFLEET")
        compr5.append("Prezado(a),")
        p5.append("Venho, por meio deste, solicitar o cadastro da colaboradora "+nome1+" matricula "+matricula1+" como condutor, a fim de que a mesma possa exercer suas atividades como "+cargo1+".")
        desp43.append("Agradeço pela atenção e coloco-me à disposição para eventuais esclarecimentos.")
        desp5.append("Att,")


        //CADASTRO DO CARTÃO SILLION

        var div6 = document.getElementById("infonome6")
        var p6 = document.getElementById("corpo6")
        var desp6 = document.getElementById("despedida6")
        var compr6 = document.getElementById("compr6")
        var desp44 = document.getElementById("despedida44")
        div6.append("SOLICITAÇÃO DE VÍNCULO DE CARTÃO SILLION - "+nome1)
        compr6.append("Prezado(a),")
        p6.append("Venho, por meio deste, solicitar o vínculo do cartão Sillion de numero "+serie1+" com a colaboradora "+nome1+" matricula "+matricula1+" , para que esta possa desempenhar regularmente suas atividades como "+cargo1+".")

        desp44.append("Agradeço pela atenção e coloco-me à disposição para eventuais esclarecimentos.")
        desp6.append("Att,")

        




        
    }

    if(masc1[0].checked){

        //COMPRA DE CELULAR
        var vazio = document.getElementById("vazio")
        var teste = document.getElementById("tes")
        var div = document.getElementById("infonome")
        var p = document.getElementById("corpo")
        var desp = document.getElementById("despedida")
        var compr = document.getElementById("compr")
        div.append("COMPRA DE CELULAR - "+ nome1.toUpperCase())
        compr.append("Prezado(a),")
        p.append("Venho por meio desta solicitar a compra de celular do colaborador "+nome1+" matrícula "+matricula1+ " ,para que o mesmo possa desempenhar suas atividades como "+ cargo1+".")
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
        div2.append("COMPRA DE CHIP - "+ nome1.toUpperCase())
        compr2.append("Prezado(a),")
        p2.append("Venho por meio desta solicitar a compra de chip do colaborador "+nome1+" matrícula "+matricula1+ " ,para que o mesmo possa desempenhar suas atividades como "+ cargo1+".")
        desp2.append("Att,")

        //COMPRA DE NOTEBOOK 

        var div3 = document.getElementById("infonome3")
        var p3 = document.getElementById("corpo3")
        var desp3 = document.getElementById("despedida3")
        var compr3 = document.getElementById("compr3")
        div3.append("COMPRA DE NOTEBOOK - "+ nome1.toUpperCase())
        compr3.append("Prezado(a),")
        p3.append("Venho por meio desta solicitar a compra do notebook do colaborador "+nome1+" matrícula "+matricula1+ " ,para que o mesmo possa desempenhar suas atividades como "+ cargo1+".")
        desp3.append("Att,")

        //AUTORIZAÇÃO SENHA DE ABASTECIMENTO

        var div4 = document.getElementById("infonome4")
        var p4 = document.getElementById("corpo4")
        var desp4 = document.getElementById("despedida4")
        var compr4 = document.getElementById("compr4")
        var desp42 = document.getElementById("despedida42")
        div4.append("AUTORIZAÇÃO PARA SENHA DE ABASTECIMENTO - "+ nome1.toUpperCase())
        compr4.append("Prezado(a),")
        p4.append("Solicito, por gentileza, a autorização para emissão de senha de abastecimento em nome do colaborador "+nome1+ ", matrícula "+matricula1+" , visando o desempenho de suas atividades como "+cargo1+".")
        desp42.append("Agradeço pela atenção e coloco-me à disposição para eventuais esclarecimentos.")
        desp4.append("Att,")


        //CADASTRO DE CONDUTOR NEXTFLEET

        var div5 = document.getElementById("infonome5")
        var p5 = document.getElementById("corpo5")
        var desp5 = document.getElementById("despedida5")
        var compr5 = document.getElementById("compr5")
        var desp43 = document.getElementById("despedida43")
        div5.append("SOLICITAÇÃO DE CADASTRO DE CONDUTOR- NEXTFLEET")
        compr5.append("Prezado(a),")
        p5.append("Venho, por meio deste, solicitar o cadastro do colaborador "+nome1+" matricula "+matricula1+" como condutor, a fim de que o mesmo possa exercer suas atividades como "+cargo1+".")
        desp43.append("Agradeço pela atenção e coloco-me à disposição para eventuais esclarecimentos.")
        desp5.append("Att,")


        //CADASTRO DO CARTÃO SILLION

        var div6 = document.getElementById("infonome6")
        var p6 = document.getElementById("corpo6")
        var desp6 = document.getElementById("despedida6")
        var compr6 = document.getElementById("compr6")
        var desp44 = document.getElementById("despedida44")
        div6.append("SOLICITAÇÃO DE VÍNCULO DE CARTÃO SILLION - "+nome1)
        compr6.append("Prezado(a),")
        p6.append("Venho, por meio deste, solicitar o vínculo do cartão Sillion de numero "+serie1+" com o colaborador "+nome1+" matricula "+matricula1+" , para que este possa desempenhar regularmente suas atividades como "+cargo1+".")

        desp44.append("Agradeço pela atenção e coloco-me à disposição para eventuais esclarecimentos.")
        desp6.append("Att,")








    


        
    }
   

    






    
    
}