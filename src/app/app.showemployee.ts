import { Component,Input } from "@angular/core";

@Component({
    selector:'show',
    templateUrl:'app.showemployee.html'
})
export class showEmployee{
    empAll:any[];

    @Input()
    inchild:any[];
    //inchild1:string;

    // empId:number=this.inchild;
    // empName:string=this.inchild;
    // empSalary:number=this.inchild;

    // addEmployee():any{
    //     this.empAll.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary});
    // }

    // deleteEmployee(data:number):any{
    //     // alert("Delete..."+data);
    //      this.empAll.splice(data,1)
    //  }
}