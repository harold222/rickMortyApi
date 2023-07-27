﻿import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

    @Input() set currentPage(value: number | null) {
        if (value) {
            this.currentP = value;
            if (this.reloadNumbers)
                this.UpatePagination();
        }
    }

    @Input() set totalPages(value: number | null) {
        if (value) {
            this.totalP = value;
            this.UpatePagination();
        }
    }

    public allowPrevious: boolean = false;
    public allowNext: boolean = false;
    public maxPage: number[]  = [];
    public currentP: number = 0;
    private totalP: number = 0;
    private reloadNumbers: boolean = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private loation: Location
    ) {
    }

    public changePage(page: number, reload: boolean = false) {
        this.reloadNumbers = reload;

        this.route.queryParams.pipe(
            take(1)
        ).subscribe((params: any) => {
            const path = this.loation.path().split('?');

            this.router.navigate([path[0]], {
                queryParams: {
                    page: page > 0 ? page : 1,
                    q: params['q'] || ""
                }
            });
        });
    }

    private UpatePagination() {
        this.maxPage = [];

        if (this.currentP == this.totalP) {
            this.maxPage.push(this.totalP);
        } else if (this.totalP > this.currentP) {
            let addPage = 0;

            this.maxPage.push(this.currentP);

            for (let i = this.currentP; i < this.totalP; i++) {
                if (addPage == 2) 
                    break;
                this.maxPage.push(i + 1);
                addPage++;
            }
        }

        this.allowPrevious = this.currentP > 1;
        this.allowNext = this.totalP > this.maxPage[this.maxPage.length - 1];
    }
}