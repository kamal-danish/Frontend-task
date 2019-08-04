import { Injectable} from '@angular/core';
import { CommonService } from '../app/common.service'

@Injectable()

export class Validate {
    regExEmail: RegExp = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    constructor(private commonSer:CommonService) { }
    checkValidations(obj){
        return (this.email(obj.email))
    }
    email(email: string) {
        if (email != '' && email != undefined) {
                if (this.regExEmail.test(email.trim())) {
                    return true;
                } else {
                    this.commonSer.openSnakBar('Please Enter a Valid Email');
                    return false;
                }
            } 
        else {
            return true;
        }
    }
}
