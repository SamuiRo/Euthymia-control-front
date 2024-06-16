import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharingService {
  private w3profile: any;

  constructor() {}

  setProfile(profile: any) {
    this.w3profile = profile;
  }

  getProfile() {
    return this.w3profile;
  }
}
