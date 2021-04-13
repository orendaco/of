# Of

Dynamic Form Orenda

## Code scaffolding
##HTML
```
 <of #vcForm [schemaModel]="schemaModel">
              <of-field id="templateRef">
                  <ng-template #control let-group="group">
                      <form [formGroup]="group">
                          <nz-input-group nzCompact>
                              <nz-select formControlName="templateOpt" style="width: 50%">
                                  <nz-option [nzLabel]="'Option 1'" [nzValue]="'1'"></nz-option>
                                  <nz-option [nzLabel]="'Option 2'" [nzValue]="'2'"></nz-option>
                              </nz-select>
                              <input formControlName="templateInput" nz-input placeholder="templateInput"
                                     style="width: 50%"/>
                          </nz-input-group>
                      </form>
                  </ng-template>
              </of-field>
          </of>
  ```
##TS
```
formDisable$ = new BehaviorSubject(false);
ngaySinhMin$ = new BehaviorSubject<Date>(new Date(1991, 2, 27));
danTocOption$ = new BehaviorSubject<IOfSelectOptionDto[]>([{
displayText: 'Kinh',
value: '1'
}, {
displayText: 'Mông',
value: '2'
}]);
schemaModel = new OfSchemaModel({
    fields: [
      new OfTextModel({
        label: 'Mã',
        dataField: 'ma',
        required: true,
        validations: [
          {
            name: 'email'
          }
        ],
        disabled: true

      }),
      new OfTextModel({
        label: 'Họ tên',
        dataField: 'tenDayDu',
        required: true,
        disabledAsync: this.formDisable$
      }),

      new OfSelectModel({
        label: 'Giới tính',
        dataField: 'gioiTinhId',
        value: 1,
        options: [
          { displayText: 'Nam', value: '1' },
          { displayText: 'Nữ', value: '2' }
        ]
      }),
      new OfSelectAsyncModel({
        label: 'Dân tộc async',
        dataField: 'danToc',
        value: 1,
        optionsAsync: this.danTocOption$
      }),
      new OfSelectApiModel({
        label: 'Tỉnh',
        dataField: 'tinhId',
        functionService: this.selectSp.getoptions({
          type: SelectOptionType.Tinh
        } as any),
        keyCache: 'tinh'
      }),
      new OfSelectCascadeModel({
        label: 'Huyện',
        dataField: 'huyenId',
        cascadeField: 'tinhId',
        functionService: (cascade) => {
          return this.selectSp.getoptions({
            type: SelectOptionType.Huyen,
            cascader: cascade
          } as any);
        },
        renderOptionFunc: (opt) => {
          if (opt) {
            return opt.value + ' - ' + opt.displayText;
          }
          return '';
        },
        renderSelectedFunc: (opt) => {
          if (opt) {
            return `<b>${opt.value}</b>` + ' - ' + opt.displayText;
          }
          return '';
        }
      }),
      new OfSelectCascadeModel({
        label: 'Xã',
        dataField: 'xaId',
        cascadeField: 'huyenId',
        functionService: (cascade) => {
          return this.selectSp.getoptions({
            type: SelectOptionType.Xa,
            cascader: cascade
          } as any);
        },
        keyCache: 'xa'
      }),

      new OfSelectSearchServerModel({
        label: 'Quận huyện search',
        dataField: 'huyenSearchServerId',
        functionService: (dto) => {
          return this.searchSp.getoptions({
            ...dto,
            type: SelectSearchServerType.Huyen
          });
        }
      }),
      new OfSelectSearchServerModel({
        label: 'Quận huyện search showPagination',
        dataField: 'huyenSearchServerId',
        functionService: (dto) => {
          return this.searchSp.getoptions({
            ...dto,
            type: SelectSearchServerType.Huyen
          });
        },
        showPagination: true
      }),
        new OfSelectAdvancedSearchModel({
            label: 'Quận huyện search advanced',
            dataField: 'huyenSelectAdvancedSearchId',
            functionService: (dto) => {
              return this.searchSp.getoptions({
                ...dto,
                type: SelectSearchServerType.Huyen
              } as any);
            },
            showPagination: true,
            componentAdvanced: HomeComponent
          }),
      new OfSelectAdvancedSearchModel({
        label: 'Quận huyện search advanced modal',
        dataField: 'huyenSelectAdvancedSearchModalId',
        functionService: (dto) => {
          return this.searchSp.getoptions({
            ...dto,
            type: SelectSearchServerType.Huyen
          } as any);
        },
        showPagination: true,
        componentAdvanced: SearchModalComponent,
        nzModalConfig: {
          nzFooter: null,
          nzStyle: { top: '20px' }
        },
        showComponentType: 'modal'
      }),
      new OfCheckBoxModel({
        label: '',
        dataField: 'checkBox',
        checkBoxLabel: 'Check box',
        disabledAsync: this.formDisable$
      }),
      new OfDateModel({
        label: 'Ngày sinh',
        dataField: 'ngaySinh',
        required: true,
        notGreaterThanCurrent: true,
        minDateAsync: this.ngaySinhMin$,
        disabledAsync: this.formDisable$
      }),
      new OfCurrencyModel({
        label: 'Đơn giá',
        dataField: 'donGia',
        disabledAsync: this.formDisable$
      }),
      new OfContentHtmlModel({
        label: ' ',
        dataField: 'benhNhanId',
        content: '<h3>content string html</h3>',
        disabledAsync: this.formDisable$
      }),
      new OfTextAreaModel({
        label: 'Ghi chú',
        dataField: 'ghiChu',
        rows: 2,
        disabledAsync: this.formDisable$
      }),
      new OfNumberModel({
        label: 'Số thứ tự',
        dataField: 'soThuTu',
        min: 10,
        max: 100,
        step: 2,
        disabledAsync: this.formDisable$
      }),
      new OfNumberModel({
        label: 'Điện thoại',
        dataField: 'dienThoai',
        onlyKeyNumber: true,
        disabledAsync: this.formDisable$
      }),
      new OfPwdModel({
        label: 'Mật khẩu',
        dataField: 'matKhau',
        disabledAsync: this.formDisable$,
        validations: [
          {
            name: 'password'
          }
        ]
      }),
      new OfRadioModel({
        label: 'Loại',
        dataField: 'loai',
        items: [{
          label: 'Loại 1',
          value: 1
        }, {
          label: 'Loại 2',
          value: 2
        }, {
          label: 'Loại 3',
          value: 3
        }]
      }),
      new OfSwitchModel({
        label: 'Switch',
        dataField: 'switch',
        yesText: 'Có'
      }),
      new OfTemplateRefModel({
        label: 'templateRef',
        dataField: 'templateRef',
        controls: [
          new OfExtendControlModel({
            dataField: 'templateOpt',
            value: '1'
          }),
          new OfExtendControlModel({
            dataField: 'templateInput',
            required: true
          })
        ]
      })
    ]
  });
```
