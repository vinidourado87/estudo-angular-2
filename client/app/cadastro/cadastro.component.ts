import { Component, Input } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http, Headers } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html' 
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    cadastrar(event) {
        event.preventDefault();

        let head = new Headers();
        head.append('Content-type', 'application/json');

        this.http.post('v1/fotos', JSON.stringify(this.foto), {headers: head})
        .subscribe(() => {
            this.foto = new FotoComponent();
        }, erro => console.log(erro));
    }
}
