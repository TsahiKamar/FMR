class Customer extends Base {
    public customerId: string;
    public fullName: string;
    public phones? : Phone[];
    public addresses? : Address[];
    public products? : Product[];
  }

