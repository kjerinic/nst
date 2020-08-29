import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Module} from '../../../../domain/Module';
import {AdminService} from '../../../../services/admin.service';
import {FormService} from '../../../../services/form.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {checkFormGroupErrors} from '../../../../utils/formUtils';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.sass']
})
export class ModuleComponent implements OnInit {
  moduleFormGroup: FormGroup;
  module: Module;
  allModules: Module[];

  constructor(private formBuilder: FormBuilder,
              private adminService: AdminService,
              private formService: FormService,
              private snackBar: MatSnackBar) {
    this.module = new Module();
    this.moduleFormGroup = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  showAllModules() {
    this.formService.getAllModules().subscribe(data => {
        this.allModules = data;
      },
      error => {
        console.log(error);
      });
  }

  private createFormGroup() {
    return this.formBuilder.group({
      Name: [this.module.name, [Validators.required, Validators.pattern('(.|\\s)*\\S(.|\\s)*')]]
    });
  }

  hasError(error: string, control: string) {
    return checkFormGroupErrors(this.moduleFormGroup, error, control);
  }

  addModule() {
    this.adminService.addModule(this.formValueToDTO(this.moduleFormGroup))
      .subscribe(() => {
          this.snackBar.open('Uspešno unet smer.', null, {
            duration: 3000
          });
          this.moduleFormGroup.reset();
          this.showAllModules();
        },
        error => {
          this.snackBar.open('Greška pri čuvanju smera.', null, {
            duration: 3000
          });
          console.log(error);
        });
  }

  private formValueToDTO(formObject: FormGroup): Module {
    const formValue = formObject.value;

    this.module.name = formValue.Name;

    return this.module;
  }

}
