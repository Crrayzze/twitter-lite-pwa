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
  allow_notifications: boolean;
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
  public allow_notifications: boolean;

  constructor(user: any) {
    this.uid = user.uid || null;
    this.username = user.username || '';
    this.email = user.email || '';
    this.bio = user.bio || '';

    this.avatar = user.avatar || '';
    this.banner = user.banner || '';

    this.allow_notifications = user.allow_notifications || false;
  }

  public toJson(): string {
    return JSON.stringify({
      username: this.username,
      email: this.email,
      bio: this.bio,

      avatar: this.avatar,
      banner: this.banner,

      allow_notifications: this.allow_notifications
    });
  }

  public toObject(): FbUserModel {
    return {
      username: this.username,
      email: this.email,
      bio: this.bio,

      avatar: this.avatar,
      banner: this.banner,

      allow_notifications: this.allow_notifications
    };
  }
}