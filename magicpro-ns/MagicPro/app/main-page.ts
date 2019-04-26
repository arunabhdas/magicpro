import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { Component } from "@angular/core";

@NgModule({
	selector: 'main',
	template: `
		<StackLayout>
			<Label align="center" text="Hello World!"></Label>
		</StackLayout>
	`,
	styles: [`
		label{
			font-size: 45;
			horizontal-align: center;
			padding-top:70;
		}
	`]
})

export class MainPage {
	constructor() {
	}
}
