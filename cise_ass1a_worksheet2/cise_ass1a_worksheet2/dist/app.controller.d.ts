import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getArticle(): any[];
    getArticleByIs(id: string): any[];
}
