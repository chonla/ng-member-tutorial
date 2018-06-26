import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidationErrors } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.css']
})
export class EditProfilePageComponent implements OnInit {

  editProfileForm: FormGroup;

  constructor(private fb: FormBuilder,
    private user: UserService,
    private router: Router) { }

  ngOnInit() {
    this.editProfileForm = this.fb.group({
      displayName: ['', Validators.required]
    });
    this.user.getDisplayName().subscribe(d => {
      this.editProfileForm.get('displayName').setValue(d.display);
    });
  }

  public save() {
    if (this.editProfileForm.status === 'INVALID') {
      alert('เฮ้ยยยย');
    } else {
      this.user.saveDisplayName(this.editProfileForm.value.displayName).subscribe(d => {
        this.router.navigate(['/dashboard']);
      }, e => {
        alert('อัพเดทไม่ได้ฮะ');
      });
    }
  }

}
