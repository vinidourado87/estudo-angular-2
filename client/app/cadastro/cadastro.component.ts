import {Component, Input} from '@angular/core';
import { FotoComponent } from '../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html' 
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();

    constructor() {
        this.foto.titulo = "Titulo";
        this.foto.url = "www.teste.com.br";
        this.foto.descricao = "Desc";
    }

    cadastrar(event) {
        event.preventDefault();
        console.log(this.foto);
    }
}
