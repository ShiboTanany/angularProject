import { Component, OnInit } from '@angular/core';
import { InsertService } from '../insert.service'


interface service{

    createdBy: string,
   
    deleted: number,
    id: number,
    name: string,
    type: string,
    isactive: string,
    terminationFees: string,
    suspensionFees: string,
    deliveryFees: string,
    deliveryDays: string,
    componentCollection: Array<any>,
    attributeCollection:Array<any>,
    attributeValueCollection: Array<any>
  }

  interface comp{

     
    id:number;
    name:string;
    description:string;
    nrc:string;
    mrc:string;

  }




@Component({
  selector: 'app-insert-component',
  templateUrl: './insert-component.component.html',
  styleUrls: ['./insert-component.component.css']
})
export class InsertComponentComponent implements OnInit {
 createdBy: string;
    updatedBy: string;
    deleted: number;
    id: number;
    name: string;
    type: string;
    isactive: string;
    terminationFees: string;
    suspensionFees: string;
    deliveryFees: string;
    deliveryDays: string;
    
    componentCollection=new Array<comp>();
    
    attributeCollection:Array<any>[];
    attributeValueCollection: Array<any>=[];
    Categories: Array<any>;
    Component= new Array<comp>();
    selectedValue:string;




    compId:number;
    compName:string;
    compDesc:string;
    compNrc:string;
    compMrc:string;
  constructor(private InsertService :InsertService) { 

 //  this.Categories=this.InsertService.getCategories();

 let x1:comp={

    "id": 1,
    "name": "DSDSDS",
    "description": "DSDSDS",
    "nrc": "DSDSds",
    "mrc": "DSsd",
    
  }
 // this.componentCollection.push(x1);


  }



  ngOnInit() {
 this.InsertService.getCategories().subscribe(
    data => {this.Categories =data ;
    }
    );
  }
  insert() {
    let obj: service = {
    "createdBy": this.createdBy,
    "deleted": 0,
    "id": this.id,
    "name": this.name,
    "type": this.type,
    "isactive": this.isactive,
    "terminationFees": this.terminationFees,
    "suspensionFees": this.suspensionFees,
    "deliveryFees": this.deliveryFees,
    "deliveryDays": this.deliveryDays,
    "componentCollection": this.componentCollection,
    "attributeCollection": null,
    "attributeValueCollection": null
  }
 
  
  this.InsertService.insert(obj).subscribe(function(data) {
        console.log('received response');;
    });

    


}

addComp(){
      let x:comp={

    "id": this.compId,
    "name": this.compName,
    "description": this.compDesc,
    "nrc": this.compNrc,
    "mrc": this.compMrc,
    
  }
  this.componentCollection.push({

    "id": 20,
    "name": "test",
    "description": null,
    "nrc": null,
    "mrc": null,
  
   
 
  });
   
  
}

    deleteComp(){
    //   let x:comp={

    // "id": this.compId,
    // "name": this.compName,
    // "description": this.compDesc,
    // "nrc": this.compNrc,
    // "mrc": this.compMrc,
    
    //   }
    
       
 
 
    }

  selectedCategory:number;
  onChange(newValue) {
  
    this.selectedCategory = newValue;
     
      this.InsertService.getComponents(this.selectedCategory).subscribe(
    data => {this.Component =data ;
    }
    );}


    selectedDev:comp;
    onChangeForComponent(value){
    
//     this.selectedDev=value;
//     alert(value.name);
// this.componentCollection.push(this.selectedDev);
  let componentselected= this.Component.filter(t=>t.id ==value);
 this.componentCollection.push(componentselected[0]);
  //      this.componentCollection.push({

  //   "id": this.selectedDev.id,
  //   "name": this.selectedDev.name,
  //   "description": this.selectedDev.description,
  //   "nrc": this.selectedDev.nrc,
  //   "mrc": this.selectedDev.mrc,
  
   
 
  // });

    }
  


}
