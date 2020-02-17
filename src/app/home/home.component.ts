import { Component, OnInit } from "@angular/core";
import { Item } from "../item";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  message: string = "";
  toDoList: Array<Item> = [];

  constructor() {}

  ngOnInit(): void {}

  addItem(): void {
    //this.toDoList.push(this.message); //lama

    this.toDoList.push({
      message: this.message,
      time: Date.now()
    });
    this.message = "";
  }

  remove(idx): void {
    this.toDoList.splice(idx, 1);
  }

  // please code above this line
}
