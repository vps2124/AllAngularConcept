import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../service/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  
  title="Accounts REST CRUD APP";
  accounts:Array<any>;
  account:any;
  message="";
  
  edit=true;
  add=true;

  
    constructor(private as:AccountsService) {
      console.log("AccountsComponent created.....");
       }
  
    ngOnInit() {
      console.log("AccountsComponent  initialized.....");
      this.getAllAccounts();
    }
  
  
    getAllAccounts(){
    this.as.getAllAccounts()
         .subscribe(response=>this.accounts=response,error=>this.message=error);
    }
  

    getAccount(accno:number){
      this.edit=false;
      this.add=true;
      console.log("In getAccount "+accno);
      this.as.getAccountByAccno(accno)
           .subscribe(response=>this.account=response,error=>this.message=error);
      }
    

      deleteAccount(accno:number){
        this.as.deleteAccountByAccno(accno)
             .subscribe(response=>this.accounts=response,error=>this.message=error);
        }
      
        newAccount(){
          this.add=false;
          this.edit=true;
          this.account={accno:0,name:'',balance:0.0};
        }


        addAccount(){
          this.as.addAccount(this.account)
          .subscribe(response=>this.accounts=response,error=>this.message=error);
          
          this.account=null;


        }

        updateAccount(){
          this.as.updateAccountByAccno(this.account.accno,this.account)
          .subscribe(response=>this.accounts=response,error=>this.message=error);
       this.account=null;
          
        }


}
