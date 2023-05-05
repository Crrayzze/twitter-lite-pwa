export interface FbUserModel {
  // General user data
  uid?: string;
  username: string;
  email: string;
  bio: string;

  // images
  avatar: string;
  banner: string;

  // Authorizations
  allow_notification: boolean;
  allow_localisation: boolean;
}

export class FbUser implements FbUserModel {

  public uid: string;
  public username: string;
  public email: string;
  public bio: string;

  // images
  public avatar: string;
  public banner: string;

  // Authorizations
  public allow_localisation: boolean;
  public allow_notification: boolean;

  constructor(user: any) {
    this.uid = user.uid || null;
    this.username = user.username || '';
    this.email = user.email || '';
    this.bio = user.bio || '';

    this.avatar = user.avatar || '';
    this.banner = user.banner || '';

    this.allow_localisation = user.allow_localisation || false;
    this.allow_notification = user.allow_notification || false;
  }

  public toJson(): string {
    return JSON.stringify({
      username: this.username,
      email: this.email,
      bio: this.bio,

      avatar: this.avatar,
      banner: this.banner,

      allow_localisation: this.allow_localisation,
      allow_notification: this.allow_notification,
    });
  }

  public toObject(): FbUserModel {
    return {
      username: this.username,
      email: this.email,
      bio: this.bio,

      avatar: this.avatar,
      banner: this.banner,

      allow_localisation: this.allow_localisation,
      allow_notification: this.allow_notification
    };
  }
}