import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class PresentationValidator {

    constructor(
        public control: AbstractControl,
        public validationFunctions: ValidatorFn[]) {
    }

    private errors: ValidationErrors[] = [];

    validate() {
        this.errors = [];
        this.validationFunctions.forEach(f => {
            const error = f(this.control);
            if (error != null) {
                this.errors.push(error);
            }
        })
    }

    get isValid(): boolean {
        return this.errors.length === 0;
    }

    get error() {
        let msg = '';
        if (this.errors.length > 0) {
            this.errors.forEach(obj => {
                msg += JSON.stringify(obj);
            });
            return { message: msg};
        }
    }
}