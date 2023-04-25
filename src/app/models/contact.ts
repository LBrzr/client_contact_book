export enum ContactField {
  id = 'id',
  name = 'nom',
  firstname = 'prenom',
  email = 'email',
  phone = 'tel',
  address = 'adresse',
  zip_code = 'code_postal',
  city = 'ville',
}

export class Contact {
  id: any;
  name: string;
  firstname: string;
  email: string;
  phone: string;
  address?: string;
  zip_code: string;
  city: string;

  constructor(
    id: any,
    name: string,
    firstname: string,
    email: string,
    phone: string,
    address: string,
    zip_code: string,
    city: string
  ) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.zip_code = zip_code;
    this.city = city;
  }

  // from json
  static fromJson(data: any): Contact {
    const fullname = data.nom.split(' ');
    const firstname = fullname[0];
    const name = fullname[1];

    return new Contact(
      data[ContactField.id],
      name,
      firstname,
      data[ContactField.email],
      data[ContactField.phone],
      data[ContactField.address],
      data[ContactField.zip_code],
      data[ContactField.city]
    );
  }

  getInitials(): string {
    return (this.firstname[0] + this.name[0]).toUpperCase();
  }

  getFullName(): string {
    return this.firstname + ' ' + this.name;
  }
}
