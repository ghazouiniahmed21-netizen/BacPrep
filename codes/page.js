function verif(nom,prenom,note){
    if(nom==""){
        alert("Le remplissage du champ nom est obligatoire.");
        return false;
    }

    if(prenom==""){
        alert("Le remplissage du champ prenom est obligatoire.");
        return false;
    }

    if(note==0){
        alert("Le remplissage du champ note est obligatoire.");
        return false;
    }

    return true;
}

function ajouter_avis(){
    let nom=document.getElementById("nom").value;
    let prenom=document.getElementById("prenom").value;
    let note=Number(document.getElementById("note").value);
    if (verif(nom,prenom,note)==false){
        return false ;
    }
    else{
        let bac=document.getElementById("s").value;
        let tab=document.getElementById("tab");
        let tr = tab.insertRow();
        let td = tr.insertCell();
        td.innerHTML =nom;
        td = tr.insertCell();
        td.innerHTML =prenom;
        td = tr.insertCell();
        td.innerHTML =bac;
        td = tr.insertCell();
        td.innerHTML =note;
    }
   
}
//function ouvrir(){
//    window.open("codes/index.html", "_blank");
//}