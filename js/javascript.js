function validaForm(frm) {

    if (frm.nome.value == "") {
        alert('Por favor Preencha o Campo Nome para continuar!');
        frm.nome.focus();
        return false;
    }
    if (frm.email.value == "") {
        alert('Por favor Preencha o Campo Email para continuar!');
        frm.email.focus();
        return false;
    }
}