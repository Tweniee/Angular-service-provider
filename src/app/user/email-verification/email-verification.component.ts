import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css'],
})
export class EmailVerificationComponent implements OnInit {
  constructor(public service: UserService, public route: ActivatedRoute) {}
  Verified: string = 'Lets see Id email will get verified.';
  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.service.emailVerification(res).subscribe((data) => {
        console.log(data);
        this.Verified = 'Email Verification Done.';
      });
    });
  }
}
