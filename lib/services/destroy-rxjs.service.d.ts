import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
export declare class DestroyRxjsService extends Subject<void> implements OnDestroy {
    ngOnDestroy(): void;
}
