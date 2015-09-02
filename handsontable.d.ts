declare var Handsontable: ht.HandsontableStatic;
declare var TextEditor: ht.TextEditor;
//declare function Handsontable(a: any, b: any): void;
declare function WalkontableCellRange(highlight: any, from: any, to: any): void;

// module
declare module ht {

    interface CellPosition {
        row: number;
        col: number;
    }

    interface CellOptions {
        renderer: any;
        editor: any;
        validator: any;
    }

    interface Comment {
        row: number;
        col: number;
        comment: string;
    }

    interface ContextMenuOption {
        [index: string]: ContextMenuItem;
    }

    interface ContextMenuItem {
        key?: string;
        name?: string | { (): void };
        callback?: (key: string, options: { start: WalkontableCellCoords; end: WalkontableCellCoords }) => void;
        disabled?: () => boolean;
        hidden?: () => boolean;
        submenu?: ContextMenuOption;
    }

    interface ContextMenuOptions {
        items: ContextMenuOption;
        build?: (trigger, e) => void;
    }

    interface ContextMenu {
        align(range: any, type: any, alignment: any): void;
        createMenu(menuName: string, row?: number): ContextMenu;
        bindMouseEvents(): void;
        bindTableEvents(): void;
        unbindTableEvents(): void;
        performAction(event: string, hot: Handsontable): void;
        unbindMouseEvents(): void;
        show(menu: ContextMenu, items: any): void;
        close(menu: ContextMenu): void;
        closeAll(): void;
        closeLastOpenedSubMenu(): void;
        hide(menu: ContextMenu): void;
        renderer: (instance: Handsontable, TD: HTMLTableDataCellElement, row: number, col: number, prop: string, value: any) => void;
        onCellMouseOver: (event: any, coords: WalkontableCellCoords, TD: HTMLTableDataCellElement, hot: Handsontable) => void;
        onBeforeKeyDown: (event: any, instance: Handsontable) => void;
        getItems(items: any): ContextMenu;
        setSubMenuPosition(coords: WalkontableCellCoords, menu: ContextMenu): void;
        setMenuPosition: (event: any, menu: ContextMenu) => void;
        menuFitsAboveCursor(cursor: any, menu: ContextMenu): boolean;
        menuFitsBelowCursor(cursor: any, menu: ContextMenu, viewPortHeight: number): boolean;
        menuFitsOnRightOfCursor(cursor: any, menu: ContextMenu, viewPortHeight: number): boolean;
        positionMenuBelowCursor(cursor: any, menu: ContextMenu): void;
        positionMenuAboveCursor(cursor: any, menu: ContextMenu, subMenu: boolean): void;
        positionMenuOnRightOfCursor(cursor: any, menu: ContextMenu, subMenu: boolean): void;
        positionMenuOnLeftOfCursor(cursor: any, menu: ContextMenu, subMenu: boolean): void;
        enable(): void;
        executeCommand(cmd: string): void;
        disable(): void;
        destory(): void;
        isMenuEnabledByOtherHotInstance(): boolean;
        removeMenu(menu: ContextMenu): void;        
        SEPARATOR: { name: string }
    }

    //interface ContextMenuStatic {
    //    SEPARATOR: { name: string }
    //}

    interface ColumnOptions {
        data: string | number | any;

        /*
         * Shortcut to define combination of cell renderer and editor for the column. 
         * Possible values: text, numeric, date, checkbox, autocomplete, handsontable.
         */
        type?: string;

        format?: string;

        /*
         * If set to true, cells will accept value that is marked as invalid by cell validator, with a background color automatically applied using CSS class htInvalid. 
         * If set to false, cells will not accept invalid value. 
         */
        allowInvalid?: boolean;

        /*
         * Make cell copyable (pressing CTRL+C on your keyboard moves its value to system clipboard). 
         * Note: this setting is false by default for cells with type password. 
         */
        copyable?: boolean;

        /*
         * String rendering function or false. 
         * String may be one of the following predefined values: autocomplete, checkbox, text, date, handsontable. 
         * Function will receive the following arguments: function(instance, td, row, col, prop, value, cellProperties) {} 
         * You can map your own function to a string like this: Handsontable.cellLookup.renderer.myEditor = myEditor
         */
        editor?: string | Function | boolean;
        
        /*
         * Make cell read only.
         */
        readonly?: boolean;  
        
        /*
         * String or rendering function. 
         * String may be one of the following predefined values: autocomplete, checkbox, text, numeric. 
         * Function will receive the following arguments: function(instance, TD, row, col, prop, value, cellProperties) {} 
         * You can map your own function to a string like this: Handsontable.cellLookup.renderer.myRenderer = myRenderer
         */
        renderer?: string | Function;

        /*
         * Make Handsontable trim the whitespace from entered content
         */
        trimWhitespace?: boolean;

        /*
         * A usually small function or regular expression that validates the input. After you determine if the input is valid, execute callback(true) or callback(false) to proceed with the execution. 
         * In function, this binds to cellProperties. 
         */
        validator?: (value: any, callback: Function) => void | RegExp;

    }

    interface ColumnSummaryOptions {
        destinationRow: number;
        destinationColumn: number;
        type?: string;
        reversedRowCoords?: boolean;
        ranges?: any[][];
        forceNumeric?: boolean;
        suppressDataTypeErrors?: boolean;
        sourceColumn?: number;
        readOnly?: boolean;
        roundFloat?: boolean;
        customFunction?: (endpoint: any) => number;
    }

    interface NestedHeaderCell {
        label: string;
        colspan: number;
    }        

    interface CollapsibleColumnOption {
        row: number;
        col: number;
        collapsible: boolean;
    }

    interface Options {
        allowInsertRow?: boolean;
        /**
         * Initial data source that will be bound to the data grid by reference (editing data grid alters the data source. See Understanding binding as reference.
         */
        data?: any;

        /**
         * Width of the grid. Can be a number or a function that returns a number.
         */
        width?: number | { (): number }

        /**
         * Height of the grid. Can be a number or a function that returns a number.
         */
        height?: number | { (): number }

        /**
         * Minimum number of rows. At least that many of rows will be created during initialization.
         */
        minRows?: number;

        /**
         * Minimum number of columns. At least that many of columns will be created during initialization.
         */
        minCols?: number;

        /**
         * Maximum number of rows.
         */
        maxRows?: number;

        /**
         * Maximum number of columns.
         */
        maxCols?: number;

        /**
         * Initial number of rows. Notice: This option only has effect in Handsontable constructor and only if data option is not provided.
         */
        startRows?: number;

        /**
         * Initial number of rows. Notice: This option only has effect in Handsontable constructor and only if data option is not provided.
         */
        startCols?: number;

        /**
         * Setting true or false will enable or disable the default row headers (1, 2, 3). You can also define an array ['One', 'Two', 'Three', ...] or a function to define the headers. If a function is set the index of the rowis passed as a parameter.
         */
        rowHeaders?: any;

        ///**
        // * Setting true or false will enable or disable the default column headers (A, B, C). You can also define an array ['One', 'Two', 'Three', ...] or a function to define the headers. If a function is set the index of the column is passed as a parameter.
        // */
        //colHeaders?: (index: number) => any | boolean | string[];

        ///**
        // * Defines column widths in pixels. Accepts number, string (that will be converted to number), array of numbers (if you want to define column width separately for each column) or a function (if you want to set column width dynamically on each render).
        // */
        //colWidths?: (index: number) => void | number | string | number[];


        /**
         * Setting true or false will enable or disable the default column headers (A, B, C). You can also define an array ['One', 'Two', 'Three', ...] or a function to define the headers. If a function is set the index of the column is passed as a parameter.
         */
        colHeaders?: { (index: number): any } | boolean | string[];

        /**
         * Defines column widths in pixels. Accepts number, string (that will be converted to number), array of numbers (if you want to define column width separately for each column) or a function (if you want to set column width dynamically on each render).
         */
        colWidths?: { (index: number): void } | number | string | number[];

        /**
         * Defines the cell properties and data binding for certain columns. Notice: Using this option sets a fixed number of columns (options startCols, minCols, maxCols will be ignored).
         * @see https://github.com/handsontable/jquery-handsontable/wiki/Options below for more detailed explanation.
         * @see http://handsontable.com/demo/datasources.html for examples
         */
        columns?: ColumnOptions[];

        /**
        * Enables the columnSummary plugin
        */
        columnSummary?: ColumnSummaryOptions[];   

        nestedHeaders?: NestedHeaderCell[][]; 

        collapsibleColumns?: boolean | CollapsibleColumnOption[]; 
        

        hiddenColumns?: boolean;
           
        comments?: boolean | Comment[];

        /**
         * Defines the cell properties for given row, col, prop coordinates.
         * See Cells section below for more detailed explanation.
         */
        cells?: (row: number, col: number, prop: string) => any;

        /**
         * Defines the structure of a new row when data source is an object.
         * @see http://handsontable.com/demo/datasources.html for examples.
         */
        dataSchema?: any;

        /**
         * When set to 1 (or more), Handsontable will add a new row at the end of grid if there are no more empty rows.
         */
        minSpareRows?: number;

        /**
         * When set to 1 (or more), Handsontable will add a new column at the end of grid if there are no more empty columns.
         */
        minSpareCols?: number;

        /**
         * If true, selection of multiple cells using keyboard or mouse is allowed.
         */
        multiSelect?: boolean;

        /**
         * Enables the fill handle (drag-down and copy-down) functionality, which shows the small rectangle in bottom right corner of the selected area, that let's you expand values to the adjacent cells.
         * Possible values: true (to enable in all directions), "vertical" or "horizontal" (to enable in one direction), false (to disable completely). Setting to true enables the fillHandle plugin, which,
         */
        fillHandle?: any;

        /**
         * Defines if the right-click context menu should be enabled. Context menu allows to create new row or column at any place in the grid.
         * Possible values: true (to enable basic options), false (to disable completely) or array of any available strings: ["row_above", "row_below", "col_left", "col_right", "remove_row", "remove_col", "undo", "redo", "sep1", "sep2", "sep3"].
         * @see http://handsontable.com/demo/contextmenu.html for examples.
         */
        contextMenu?: boolean | string[]| ContextMenuOptions;

        /**
         * If true, undo/redo functionality is enabled.
         */
        undo?: boolean;

        /**
         * If true, mouse click outside the grid will deselect the current selection.
         */
        outsideClickDeselects?: boolean;

        /**
         * If true, ENTER begins editing mode (like Google Docs). If false, ENTER moves to next row (like Excel) and adds new row if necessary. TAB adds new column if necessary.
         */
        enterBeginsEditing?: boolean;

        /**
         * Defines cursor move after ENTER is pressed (SHIFT+ENTER uses negative vector). Can be an object or a function that returns an object. The event argument passed to the function is a jQuery.Event object received after a ENTER key has been pressed. This event object can be used to check whether user pressed ENTER or SHIFT + ENTER.
         */
        enterMoves?: any;

        /**
         * Defines cursor move after TAB is pressed (SHIFT+TAB uses negative vector). Can be an object or a function that returns an object. The event argument passed to the function is a jQuery.Event object received after a TAB key has been pressed. This event object can be used to check whether user pressed TAB or SHIFT + TAB.
         */
        tabMoves?: any;

        /**
         * If true, pressing TAB or right arrow in the last column will move to first column in next row.
         */
        autoWrapRow?: boolean;

        /**
         * If true, pressing ENTER or down arrow in the last row will move to first row in next column.
         */
        autoWrapCol?: boolean;

        /**
         * Autocomplete definitions.
         * @see demo/autocomplete.html for examples and definitions.
         */
        autoComplete?: any[];

        /**
         * Maximum number of rows than can be copied to clipboard using CTRL+C.
         */
        copyRowsLimit?: number;

        /**
         * Maximum number of columns than can be copied to clipboard using CTRL+C.
         */
        copyColsLimit?: number;

        /**
         * Defines paste (CTRL+V) behavior. Default value "overwrite" will paste clipboard value over current selection. 
         * When set to "shift_down", clipboard data will be pasted in place of current selection, while all selected cells are moved down. 
         * When set to "shift_right", clipboard data will be pasted in place of current selection, while all selected cells are moved right.
         */
        pasteMode?: string;

        /**
         * Column stretching mode. Possible values: "none", "last", "all".
         */
        stretchH?: string;

        /**
         * Lets you overwrite the default isEmptyRow method.
         */
        isEmptyRow?: (row: number) => boolean;

        /**
         * Lets you overwrite the default isEmptyCol method.
         */
        isEmptyCol?: (col: number) => boolean;

        /**
         * Turn on Manual column resize, if set to a boolean or define initial column resized widths, if set to an array of numbers.
         */
        manualColumnResize?: any;

        /**
         * Turn on Manual column move, if set to a boolean or define initial column order, if set to an array of column indexes.
         */
        manualColumnMove?: any;

        /**
         * Turn on Column sorting.
         */
        columnSorting?: boolean;

        /**
         * Turn on saving the state of column sorting, columns positions and columns sizes in local storage. For more information see How to save data localy.
         */
        persistentState?: boolean;

        /**
         * Class name for all visible rows in current selection.
         */
        currentRowClassName?: string;

        /**
         * Class name for all visible columns in current selection.
         */
        currentColClassName?: string;

        /**
         * Allows to specify the number of rows fixed (aka freezed) on the top of the table.
         */
        fixedRowsTop?: number;

        /**
         * Allows to specify the number of rows fixed (aka freezed) on the top of the table.
         */
        fixedRowsBottom?: number;

        /**
         * Allows to specify the number of columns fixed (aka freezed) on the left side of the table.
         */
        fixedColumnsLeft?: number;

        /**
         * Setting to true enables selecting just a fragment of the text within a single cell or between adjacent cells.
         */
        fragmentSelection?: boolean;

        /**
         * Setting to true word wrapping of the cell text content that does not fit in the fixed column width.
         */
        wordWrap?: boolean;

        /**
         * CSS class name cells configured with wordWrap: false.
         */
        noWordWrapClassName?: string;

        /**
         * When set to an non-empty string, displayed as the cell content for empty cells.
         */
        placeholder?: any;

        /**
         * CSS class name for cells that have a placeholder in use.
         */
        placeholderCellClassName?: string;

        /**
         * CSS class name for cells that did not pass validation.
         */
        invalidCellClassName?: string;

        /**
         * CSS class name for read-only cells.
         */
        readOnlyCellClassName?: string;

        /**
         * Setting to true enables the debug mode, currently used to test the correctness of the row and column header fixed positioning on a layer above the master table.
         */
        debug?: boolean;

        /**
         * When set to true, the table is rerendered when it is detected that it was made visible in DOM.
         */
        observeDOMVisibility?: boolean;

        /**
         * Setting to true enables the autoColumnSize plugin, which makes sure each column gets enough space to show its content.
         */
        autoColumnSize?: boolean;

        /**
        * Number of rows to be prerendered before and after the viewport is changed.
        *
        * @type {Number}
        * @default 10
        */
        viewportRowRenderingOffset?: number;

        /**
        * Number of columns to be prerendered before and after the viewport is changed.
        *
        * @type {Number}
        * @default 10
        */
        viewportColumnRenderingOffset?: number;


        /**
         * Setting to true enables the observeChanges plugin, which automatically renders the table when a change in the data source is observed.
         */
        observeChanges?: boolean;

        /**
         * Setting to true enables the manualRowResize plugin, which allows to resize the row height with your mouse.
         */
        manualRowResize?: boolean;

        /**
         * Setting to true enables the copyPaste plugin, which enables the copying and pasting to the clipboard.
         */
        copyPaste?: boolean;

        /**
         * Setting to true enables the search plugin (see demo).
         */
        search?: boolean;

        /**
         * Setting to true or array enables the mergeCells plugin, which enables the merging of the cells. (see demo). You can provide the merged cells on the pageload if you feed the mergeCells option with an array.
         */
        mergeCells?: any;

        /**
         * Callback fired before Walkontable instance is initiated.
         */
        beforeInitWalkontable?: Function;

        /**
         * Callback fired before Handsontable instance is initiated.
         * Note: this can be set only by global PluginHooks instance.
         */
        beforeInit?: Function;

        /**
         * Callback fired before Handsontable table is rendered. Parameters:
         *   - isForced is true if rendering was triggered by a change of settings or data; or false if rendering was triggered by scrolling or moving selection.
         */
        beforeRender?: (isForced: boolean) => void;

        /**
         * Callback fired before one or more cells is changed. Its main purpose is to alter changes silently before input. Parameters:
         *   - changes is a 2D array containing information about each of the edited cells [ [row, prop, oldVal, newVal], ... ].
         *     - To disregard a single change, set changes[i] to null or remove it from array using changes.splice(i, 1).
         *     - To alter a single change, overwrite the desired value to changes[i][3].
         *     - To cancel all edit, return false from the callback or set array length to 0 (changes.length = 0).
         *   - source is the name of a source of changes.
         */
        beforeChange?: (changes: any[][], source: string) => void;

        beforeChangeRender?: Function;

        /**
         * Callback fired before sorting the table. The column argument is a relative (displayed) index of a column that is about to be sorted. To get the absolute column index, just add the current column offset. You can get the offset by using colOffset() method.
         */
        beforeColumnSort?: (column: number, order: boolean) => void;

        /**
         * Callback fired before setting single value from the data source array.
         */
        beforeSet?: (v: Object) => void;

        /**
         * Callback fired before getting cell settings.
         */
        beforeGetCellMeta?: (row: number, col: number, cellProperties: Object) => void;

        /**
         * Parameters:
         *   - start is an object containing information about first filled cell: { row : 2, col : 0 }.
         *   - end is an object containing information about last filled cell: { row : 4, col : 1 }.
         *   - data is an 2D array containing information about fill pattern: [ ["1", "Ted"], ["1", "John"] ].
         */
        beforeAutofill?: (start: CellPosition, end: CellPosition, data: string[][]) => void;

        /**
         * Callback fired before keydown event is handled. It can be used to overwrite default key bindings. Caution - in your beforeKeyDown handler you need to call event.stopImmediatePropagation() to prevent default key behavior.
         */
        beforeKeyDown?: (event: KeyboardEvent) => void;

        /**
         * A plugin hook executed before validator function, only if validator function is defined. This can be used to manipulate value of changed cell before it is applied to the validator function. NOTICE: this will not affect values of changes. This will change value ONLY for validation!
         */
        beforeValidate?: (value: any, row: number, prop: string, source: string) => void;

        /**
         * Callback fired after Handsontable instance is initiated.
         */
        afterInit?: Function;

        /**
         * Callback fired after new data is loaded (by loadData method) into the data source array.
         */
        afterLoadData?: Function;

        /**
         * Callback fired after Handsontable table is rendered. Parameters:
         *   - isForced is true if rendering was triggered by a change of settings or data; or false if rendering was triggered by scrolling or moving selection.
         */
        afterRender?: (isForced: boolean) => void;

        /**
         * Callback fired after one or more cells is changed. Its main use case is to save the input. Parameters:
         *   - changes is a 2D array containing information about each of the edited cells [ [row, prop, oldVal, newVal], ... ].
         *   - source is one of the strings: "alter", "empty", "edit", "populateFromArray", "loadData", "autofill", "paste".
         * Note: for performance reasons, the changes array is null for "loadData" source.
         */
        afterChange?: { (changes: any[], source: string): void };

        /**
         * Callback fired after sorting the table. The column argument is a relative (displayed) index of a column that is about to be sorted. To get the absolute column index, just add the current column offset. You can get the offset by using colOffset() method.
         */
        afterColumnSort?: (column: number, order: boolean) => void;

        /**
         * Callback fired while one or more cells are being selected (on mouse move). Parameters:
         *   - r selection start row
         *   - c selection start column
         *   - r2 selection end row
         *   - c2 selection end column
         */
        afterSelection?: (r: number, c: number, r2: number, c2: number) => void;

        /**
         * The same as above, but data source object property name is used instead of the column number.
         */
        afterSelectionByProp?: (r: number, p: string, r2: number, p2: string) => void;

        /**
         * Callback fired while one or more cells are being selected (on mouse up). Parameters:
         *   - r selection start row
         *   - c selection start column
         *   - r2 selection end row
         *   - c2 selection end column
         */
        afterSelectionEnd?: (r: number, c: number, r2: number, c2: number) => void;

        /**
         * The same as above, but data source object property name is used instead of the column number.
         */
        afterSelectionEndByProp?: (r: number, p: string, r2: number, p2: string) => void;

        /**
         * Event called when current cell is deselected.
         */
        afterDeselect?: Function;

        /**
         * Callback fired after getting cell settings.
         */
        afterGetCellMeta?: (row: number, col: number, cellProperties: Object) => void;

        /**
         * Callback fired after getting info about column header.
         */
        afterGetColHeader?: (col: number, TH: HTMLTableHeaderCellElement) => void;

        /**
         * Callback fired after calculating column width.
         */
        afterGetColWidth?: (col: number, response: Object) => void;

        /**
         * Callback fired after destroing Handsontable instance.
         */
        afterDestroy?: Function;

        /**
         * Callback is fired when a new row is created. Parameters:
         *   - index represents the index of first newly created row in the data source array.
         *   - amount number of newly created rows in the data source array.
         */
        afterCreateRow?: (index: number, amount: number) => void;

        /**
         * Callback is fired when a new column is created. Parameters:
         *   - index represents the index of first newly created column in the data source array.
         *   - amount number of newly created columns in the data source array.
         */
        afterCreateCol?: (index: number, amount: number) => void;

        /**
         * Callback is fired when one or more rows are about to be removed. Parameters:
         *   - index is an index of starter row.
         *   - amount is an anount of rows to be removed.
         */
        beforeRemoveRow?: (index: number, amount: number) => void;

        /**
         * Callback is fired when one or more rows are removed. Parameters:
         *   - index is an index of starter row.
         *   - amount is an anount of removed rows.
         */
        afterRemoveRow?: (index: number, amount: number) => void;

        /**
         * Callback is fired when one or more columns are about to be removed. Parameters:
         *   - index is an index of starter column.
         *   - amount is an anount of columns to be removed.
         */
        beforeRemoveCol?: (index: number, amount: number) => void;

        /**
         * Callback is fired when one or more columns are removed. Parameters:
         *   - index is an index of starter column.
         *   - amount is an anount of removed columns.
         */
        afterRemoveCol?: (index: number, amount: number) => void;

        /**
         * Callback is fired after changing column size.
         */
        afterColumnResize?: (col: number, size: number) => void;

        /**
         * Callback is fired after changing column placement.
         */
        afterColumnMove?: (oldIndex: number, newIndex: number) => void;

        /**
         * Callback fired if copyRowsLimit or copyColumnsLimit was reached.
         */
        afterCopyLimit?: (selectedRowsCount: number, selectedColsCount: number, copyRowsLimit: number, copyColsLimit: number) => void;

        /**
         * A plugin hook executed after validator function, only if validator function is defined. Validation result is the first parameter. This can be used to determinate if validation passed successfully or not. You can cancel current change by returning false.
         */
        afterValidate?: (isValid: boolean, value: any, row: number, prop: string, source: string) => boolean;

        /**
         * Callback fired before setting range is ended. Parameters:
         *   - coords is WalkontableCellCoords array
         */
        beforeSetRangeEnd?: (coords: any[]) => void;

        afterUpdateSettings?: Function;

        afterRenderer?: (TD: HTMLTableDataCellElement, row: number, col: number, prop: string, value: string, cellProperties: Object) => void;

        /**
         * Callback fired after clicking on a cell or row/column header. 
         * In case the row/column header was clicked, the index is negative. For example clicking on the row header of cell (0, 0) results with afterOnCellMouseDown called with coords {row: 0, col: -1}.
         */
        afterOnCellMouseDown?: (event: MouseEvent, coords: CellPosition, TD: HTMLTableDataCellElement) => void;

        /**
         * Callback fired after hovering a cell or row/column header with the mouse cursor. 
         * In case the row/column header was hovered, the index is negative. For example clicking on the row header of cell (0, 0) results with afterOnCellMouseOver called with coords {row: 0, col: -1}.
         */
        afterOnCellMouseOver?: (event: MouseEvent, coords: CellPosition, TD: HTMLTableDataCellElement) => void;

        /**
         * Callback fired after.
         */
        afterOnCellCornerMouseDown?: (event: MouseEvent) => void;

        afterScrollVertically?: Function;

        afterScrollHorizontally?: Function;

        /**
         * Callback fired after reset cell's meta.
         */
        afterCellMetaReset?: Function;

        /**
         * Callback fired after modify column's width.
         */
        modifyColWidth?: (width: number, col: number) => void;

        /**
         * Callback fired after modify hight of row.
         */
        modifyRowHeight?: (height: number, row: number) => void;

        /**
         * Callback fired after row modify.
         */
        modifyRow?: (row: number) => void;

        /**
         * Callback fired after column modify.
         */
        modifyCol?: (col: number) => void;

        afterSetCellMeta?: Function;

        sortIndicator?: boolean;

        ///**
        // * Deprecated! Now event is called afterSelection.
        // */
        //onSelection?: (r: number, p: number, r2: number, p2: number) => void;

        ///**
        // * Deprecated! Now event is called afterSelectionByProp.
        // */
        //onSelectionByProp?: (r: number, p: number, r2: number, p2: number) => void;

        ///**
        // * Deprecated! Now event is called afterSelectionEnd.
        // */
        //onSelectionEnd?: (r: number, p: number, r2: number, p2: number) => void;

        ///**
        // * Deprecated! Now event is called afterSelectionEndByProp.
        // */
        //onSelectionEndByProp?: (r: number, p: number, r2: number, p2: number) => void;

        ///**
        // * Deprecated! Now event is called beforeChange.
        // */
        //onBeforeChange?: (changes: any[], source: string) => void;

        ///**
        // * Deprecated! Now event is called afterChange.
        // */
        //onChange?: (changes: any[], source: string) => void;

        ///**
        // * Deprecated! Now event is called afterCopyLimit.
        // */
        //onCopyLimit?: (selectedRowsCount: number, selectedColsCount: number, copyRowsLimit: number, copyColsLimit: number) => void;

    }

    interface WalkontableCellCoords {
        row: any;
        col: any;
    }

    interface WalkontableCellRange {
        new (hightlight: WalkontableCellCoords, from: WalkontableCellCoords, to: WalkontableCellCoords): void;

        highlight: WalkontableCellCoords;
        from: WalkontableCellCoords;
        to: WalkontableCellCoords;

        isValid(instance: any): boolean;
        isSingle(): boolean;

        /*
        * Returns selected range height (in number of rows)
        *
        * @returns {number}
        */
        getHeight(): number;

        /*
        * Returns selected range width (in number of columns)
        *
        * @returns {number}
        */
        getWidth(): number;

        /**
        * Returns boolean information if given cell coords is within `from` and `to` cell coords of this range
        *
        * @param {WalkontableCellCoords} cellCoords
        * @returns {boolean}
        */
        includes(cellCoords: WalkontableCellCoords): boolean;

        includesRange(testedRange: WalkontableCellRange): boolean;

        isEqual(testedRange: WalkontableCellRange): boolean;

        /**
        * Returns true if tested range overlaps with the range.
        * Range A is considered to to be overlapping with range B if intersection of A and B or B and A is not empty.
        *
        * @param testedRange
        * @returns {boolean}
        */
        overlaps(testedRange: WalkontableCellRange): boolean;

        isSouthEastOf(testedRange: WalkontableCellRange): boolean;

        isNorthWestOf(testedRange: WalkontableCellRange): boolean;

        /**
        * Adds a cell to a range (only if exceeds corners of the range). Returns information if range was expanded
        *
        * @param {WalkontableCellCoords} cellCoords
        * @returns {boolean}
        */
        expand(cellCoords: WalkontableCellCoords): boolean;

        /*
         * @returns 'NW-SE', 'NE-SW', 'SE-NW' or 'SW-NE'
         */
        getDirection(): string;

        setDirection(direction: string): void;
        setDirection(direction: 'NW-SE'): void;
        setDirection(direction: 'NE-SW'): void;
        setDirection(direction: 'SE-NW'): void;
        setDirection(direction: 'SW-NE'): void;

        getTopLeftCorner(): WalkontableCellCoords;

        getBottomRightCorner(): WalkontableCellCoords;

        getTopRightCorner(): WalkontableCellCoords;

        getBottomLeftCorner(): WalkontableCellCoords;

        isCorner(coords: WalkontableCellCoords, expandedRange: WalkontableCellRange): boolean;

        getOppositeCorner(coords: WalkontableCellCoords, expandedRange: WalkontableCellRange): WalkontableCellCoords;

        getBordersSharedWith(range: WalkontableCellRange): string[];

        getInner(): WalkontableCellCoords[];

        getAll(): WalkontableCellCoords[];

        /**
        * Runs a callback function against all cells in the range. You can break the iteration by returning false in the callback function
        *
        * @param callback {Function}
        */
        forAll(callback: (row, col) => boolean): void;
    }

    interface Handsontable {        

        //pluginHookBucket: Hooks;

        /**
         * {@link Handsontable.Hooks#add}
         *
       * @param {String} key
       * @param {Function} fn
       */
        addHook(key: string, fn: Function) : void;

        addHookOnce(key: string, fn: Function) : void;

        removeHook(key: string, fn: Function) : void;

        runHooks(key: string, args: any) : void;

        getActiveEditor(): any;

        /*Use it if you need to change configuration after initialization*/
        updateSettings(options: Options): void;

        /*Returns an object containing the current grid settings*/
        getSettings(): Options;

        /*Reset all cells in the grid to contain data from the data array*/
        loadData(data: any): void;
        
        /*Listen to keyboard input on document body*/
        listen(): void;

        /*Returns renderer type
         * 
         * TODO : declare return type of function
         */
        getCellRenderer(row: number, col: number): any;

        /*Stop listening to keyboard input on document body*/
        unlisten(): void;

        /*Returns true if current Handsontable instance is listening to keyboard input on document body*/
        isListening(): boolean;

        /*Rerender the table*/
        render(): void;

        /*Remove the grid from the DOM*/
        destroy(): void;

        /*Validate all cells using their validator functions and calls callback when finished.
         * Does not render the view
         */
        validateCells(callback: Function): void;

        /*
         * Returns the current data object (the same that was passed by the data configuration option or loadData method)
         */
        getData(): any;
        
        /*
         * Returns a slice of the data from the data object (the same that was passed by the data configuration option or loadData method) 
         * by specifying a cell range
         */
        getData(rowFrom: number, colFrom: number, rowTo: number, colTo: number): any;

        /*Returns cell value at row, col. row and col are the visible indexes, so the returned value may change if columns are reordered or sorted*/
        getDataAtCell(row: number, col: number): any;

        /*Returns cell value at row index by specifying the property name of the data object in the row (e.g 'first.name')*/
        getDataAtRowProp(row: number, prop: string): any;

        /*Returns a single row of the data (array or objet, depending on what you have). row is the visible index of the row*/
        getDataAtRow(row: number): any;

        /**
        * Returns a single row of the data (array or object, depending on what you have). `row` is the index of the row in the data source.
        *
        * @since 0.11.0-beta3
        * @param {Number} row
        * @returns {Array|Object}
        */
        getSourceDataAtRow(row: number): any;

        /*
         * Returns an array of column values from the data source. col is the visible index of the column
         */
        getDataAtCol(col: number): any;

        /*
         * Returns an array of column values from the data source. col is the index of the column in the data source.
         */
        getSourceDataAtCol(col: number): any;

        /*
         * Given the object property name (e.g. 'first.name'), returns array of column values from the data source. 
         */
        getDataAtProp(prop: string): any;

        /*
         * Get value of selected range. Each column is separated by tab, each row is separated by new line character 
         */
        getCopyableData(startRow: number, startCol: number, endRow: number, endCol: number): any;

        /*
         * Returns value of selected cell
         */
        getValue(): any;

        /*
         * Set new value to a cell. To change many cells at once, pass an array of changes in format [ [row, col, value], ... ] as the only parameter. 
         * col is the index of visible column (note that if columns were reordered, the current order will be used). 
         * source is a flag for before/afterChange events. 
         * If you pass only array of changes then source could be set as second parameter.
         */
        setDataAtCell(row: number, col: number, value: any, source?: string): void;

        /*
         * Change many cells at once, pass an array of changes in format [ [row, col, value], ... ] as the only parameter.          
         * source is a flag for before/afterChange events. 
         * If you pass only array of changes then source could be set as second parameter.
         */
        setDataAtCell(changes: any[], source?: string): void;

        setDataAtRowProp(row: number, prop: string, value: any, source?: string): void;

        setDataAtRowProp(changes: any[], source?: string): void;

        /*
         * Populate cells at position with 2D input array (e.g. [ [1, 2], [3, 4] ]). 
         * Use endRow, endCol when you want to cut input when certain row is reached. 
         * Optional source parameter (default value "populateFromArray") is used to identify this call in the resulting events (beforeChange, afterChange). 
         * Optional populateMethod parameter (default value "overwrite", possible values "shift_down" and "shift_right") has the same effect as pasteMethod option (see Options page) 
         */
        populateFromArray(row: number, col: number, input: any[], endRow: number, source?: string, populateMethod?: string): void;

        /*
         * Adds/removes data from the column. This function works is modelled after Array.splice. 
         * Parameter col is the index of column in which do you want to do splice. Parameter index is the row index at which to start changing the array. 
         * If negative, will begin that many elements from the end. Parameter amount, is the number of old array elements to remove. 
         * If the amount is 0, no elements are removed. Fourth and further parameters are the elements to add to the array. 
         * If you don't specify any elements, spliceCol simply removes elements from the array.
         */
        spliceCol(col: number, index: number, amount: number, ...elements: any[]): void;

        /*
         * Adds/removes data from the row. This function works is modelled after Array.splice. 
         * Parameter row is the index of row in which do you want to do splice. 
         * Parameter index is the column index at which to start changing the array. 
         * If negative, will begin that many elements from the end. Parameter amount, is the number of old array elements to remove. 
         * If the amount is 0, no elements are removed. Fourth and further parameters are the elements to add to the array. 
         * If you don't specify any elements, spliceCol simply removes elements from the array.
         */
        spliceRow(row: number, index: number, amount: number, ...elements: any[]): void;

        alter(op: string, index: number, amount?: number, source?: string): void;
        /*
         * Insert new row(s) above the row at given index. If index is null or undefined, the new row will be added after the current last row. 
         * Default amount equals 1
         */
        alter(op: 'insert_row', index: number, amount?: number, source?: string): void;

        /*
         * Insert new column(s) before the column at given index. 
         * If index is null or undefined, the new column will be added after the current last column. 
         * Default amount equals 1
         */
        alter(op: 'insert_col', index: number, amount?: number, source?: string): void;

        /*
         * Remove the row(s) at given index. Default amount equals 1
         */
        alter(op: 'remove_row', index: number, amount?: number, source?: string): void;

        /*
         * Remove the column(s) at given index. Default amount equals 1
         */
        alter(op: 'remove_col', index: number, amount?: number, source?: string): void;

        /*
         * Returns TD element for given row, col if it is rendered on screen. 
         * Returns null if the TD is not rendered on screen (probably because that part of table is not visible). 
         * If the topmost parameter is true, returns the topmost cell from all overlays (such as fixed rows/columns).
         */
        getCell(row: number, col: number, topmost: boolean): HTMLTableDataCellElement;

        /*
         * Return cell properties for given row, col coordinates
         */
        getCellMeta(row: number, col: number): any;

        /*
         * Sets cell meta data object key corresponding to params row, col
         */
        setCellMeta(row: number, col: number, key: string, val: string): void;

        /*
         * Destroys current editor, renders and selects current cell. 
         * If revertOriginal == false, edited data is saved. Otherwise previous value is restored
         */
        destroyEditor(revertToOriginal?: boolean): void;

        /*
         * Select cell row, col or range finishing at endRow, endCol. By default, viewport will be scrolled to selection
         */
        selectCell(row: number, col: number, endRow?: number, endCol?: number, scrollToSelection?: boolean): boolean;

        /*
         * Deselect current selection
         */
        deselectCell(): void;

        /**
        * Return index of the currently selected cells as an array `[startRow, startCol, endRow, endCol]`.
        *
        * Start row and start col are the coordinates of the active cell (where the selection was started).
        *
        * @returns {Array}
        */
        getSelected(): number[];

        /*
         * Returns current selection as a WalkontableCellRange object. Returns undefined if there is no selection.
         */
        getSelectedRange(): WalkontableCellRange;

        /*
         * Clears grid
         */
        clear(): void;

        /*
         * Returns total number of rows in the grid
         */
        countRows(): number;

        /*
         * Returns total number of columns in the grid
         */
        countCols(): number;

        /*
         * Returns property name that corresponds with the given column index
         */
        colToProp(col: number): string;

        /*
         * Returns index of first visible row
         */
        rowOffset(): number;

        /*
         * Returns index of first visible column
         */
        colOffset(): number;

        /*
         * Returns number of visible rows
         */
        countVisibleRows(): number;

        /*
         * Returns number of visible columns
         */
        countVisibleCols(): number;

        /*
         * Returns number of empty rows. If the optional ending parameter is true, returns number of empty rows at the bottom of the table
         */
        countEmptyRows(ending?: boolean): number;

        /*
         * Returns number of empty columns. If the optional ending parameter is true, returns number of empty columns at right hand edge of the table
         */
        countEmptyCols(ending?: boolean): number;

        /*
         * Returns true if the row at the given index is empty, false otherwise
         */
        isEmptyRow(row: number): boolean;

        /*
         * Returns true if the column at the given index is empty, false otherwise
         */
        isEmptyCol(col: number): boolean;

        /*
         * Returns array of row headers (if they are enabled). If param row is given, return header at given row as string
         */
        getRowHeader(): any[];

        /*
         * Returns array of row headers (if they are enabled). If param row is given, return header at given row as string
         */
        getRowHeader(row: number): string;

        /*
         * Returns array of col headers (if they are enabled). If param col given, return header at given col as string
         */
        getColHeader(): any[];
        /*
         * Returns array of col headers (if they are enabled). If param col given, return header at given col as string
         */
        getColHeader(col: number): string;

        /*
         * Returns information of this table is configured to display column headers 
         */
        hasColHeaders(): boolean;

        /*
         * Return column width 
         */
        getColWidth(col: number): number;

        /*
         * Return row height
         */
        getRowHeight(row: number): number;

        /*
         * Returns column index that corresponds with the given property
         */
        propToCol(property: string): number;

        clearUndo(): void;

        /*
         * Return true if undo can be performed, false otherwise
         */
        isUndoAvailable(): boolean;

        /*
         * Return true if redo can be performed, false otherwise
         */
        isRedoAvailable(): boolean;

        /*
         * Undo last edit
         */
        undo(): void;

        /*
         * Redo edit (used to reverse an undo)
         */
        redo(): void;

        getPlugin(plungi: string): any;
    }

    interface HandsontableStatic {
        hooks: PluginHookClass;
        editors: Editors;
        helper: HandsontableHelper;
        renderers: Renderers;
        plugins: any;
        Dom: HtDom;
        ContextMenu: ContextMenu;
        eventManager(instance: any): EventManager;
        Comments: Comments;
        
        new (elem: HTMLElement, options: Options): Handsontable;
    }    

    interface HandsontableHelper {
        keyCode: htKeyCodes;
        isPrintableChar(keyCode: number): boolean;
        isMetaKey(keyCode: number): boolean;
        isCtrlKey(keyCode: number): boolean;
        stringify(value: any): string;
        isNumeric(value: any): boolean;
        stopPropagation(event: any): void;
        pivot(array : any[]): any[];

    }

    export interface EventManager {
        addEventListener(element, event, callback): Function;
        removeEventListener(element, event, callback): void;
        clear(): void;
        fireEvent(element, evtType : string): void;
    }

    export interface htKeyCodes {
        MOUSE_LEFT: number;
        MOUSE_RIGHT: number;
        MOUSE_MIDDLE: number;
        BACKSPACE: number;
        COMMA: number;
        INSERT: number;
        DELETE: number;
        END: number;
        ENTER: number;
        ESCAPE: number;
        CONTROL_LEFT: number;
        COMMAND_LEFT: number;
        COMMAND_RIGHT: number;
        ALT: number;
        HOME: number;
        PAGE_DOWN: number;
        PAGE_UP: number;
        PERIOD: number;
        SPACE: number;
        SHIFT: number;
        CAPS_LOCK: number;
        TAB: number;
        ARROW_RIGHT: number;
        ARROW_LEFT: number;
        ARROW_UP: number;
        ARROW_DOWN: number;
        F1: number;
        F2: number;
        F3: number;
        F4: number;
        F5: number;
        F6: number;
        F7: number;
        F8: number;
        F9: number;
        F10: number;
        F11: number;
        F12: number;
        A: number;
        X: number;
        C: number;
        V: number;
    }

    interface Hooks {
        /**
       * Callback fired before Walkontable instance is initiated.
       *
       * @since 0.11
       * @event Handsontable.Hooks#beforeInitWalkontable
       */
        beforeInitWalkontable: { (...p: any[]): any }[];

        /**
         * @description
         * Callback fired before Handsontable instance is initiated.
         *
         * __Note:__ This can be set only by global PluginHooks instance.
         *
         * @event Handsontable.Hooks#beforeInit
         */
        beforeInit: { (...p: any[]): any }[];

        /**
         * Callback fired before Handsontable table is rendered.
         *
         * @event Handsontable.Hooks#beforeRender
         * @param {Boolean} isForced If true rendering was triggered by a change of settings or data; or false if
         *                           rendering was triggered by scrolling or moving selection.
         */
        beforeRender: { (...p: any[]): any }[];

        /**
         * Callback fired before setting range is ended.
         *
         * @event Handsontable.Hooks#beforeSetRangeEnd
         * @param {Array} coords WalkontableCellCoords array.
         */
        beforeSetRangeEnd: { (...p: any[]): any }[];

        /**
         * @event Handsontable.Hooks#beforeDrawBorders
         */
        beforeDrawBorders: { (...p: any[]): any }[];

        /**
         * Callback fired before one or more cells is changed. Its main purpose is to alter changes silently before input.
         *
         * @example
         * // To disregard a single change, set changes[i] to null or remove it from array using changes.splice(i, 1).
         * ...
         * $('div#example1').handsontable({
         *   beforeChange: function(changes, source) {
         *     // [[row, prop, oldVal, newVal], ...]
         *     changes[0] = null;
         *   }
         * });
         * ...
         *
         * // To alter a single change, overwrite the desired value to changes[i][3].
         * ...
         * $('div#example1').handsontable({
         *   beforeChange: function(changes, source) {
         *     // [[row, prop, oldVal, newVal], ...]
         *     changes[0][1] = 10;
         *   }
         * });
         * ...
         *
         * // To cancel all edit, return false from the callback or set array length to 0 (changes.length = 0).
         * ...
         * $('div#example1').handsontable({
         *   beforeChange: function(changes, source) {
         *     // [[row, prop, oldVal, newVal], ...]
         *     return false;
         *   }
         * });
         * ...
         *
         * @event Handsontable.Hooks#beforeChange
         * @param {Array} changes 2D array containing information about each of the edited cells.
         * @param {String} source The name of a source of changes.
         */
        beforeChange: { (...p: any[]): any }[];

        /**
         * @event Handsontable.Hooks#beforeChangeRender
         * @since 0.11
         */
        beforeChangeRender: { (...p: any[]): any }[];

        /**
         * Callback is fired when one or more columns are about to be removed.
         *
         * @event Handsontable.Hooks#beforeRemoveCol
         * @param {Number} index Index of starter column.
         * @param {Number} amount Amount of columns to be removed.
         */
        beforeRemoveCol: { (...p: any[]): any }[];

        /**
         * Callback is fired when one or more rows are about to be removed.
         *
         * @event Handsontable.Hooks#beforeRemoveRow
         * @param {Number} index Index of starter column.
         * @param {Number} amount Amount of columns to be removed.
         */
        beforeRemoveRow: { (...p: any[]): any }[];

        /**
         * @description
         * A plugin hook executed before validator function, only if validator function is defined.
         * This can be used to manipulate value of changed cell before it is applied to the validator function.
         *
         * __Notice:__ this will not affect values of changes. This will change value ONLY for validation!
         *
         * @event Handsontable.Hooks#beforeValidate
         * @since 0.9.5
         * @param {*} value
         * @param {Number} row
         * @param {String} prop
         * @param {String} source
         */
        beforeValidate: { (...p: any[]): any }[];

        /**
         * Callback fired before getting cell settings.
         *
         * @event Handsontable.Hooks#beforeGetCellMeta
         * @param {Number} row
         * @param {Number} col
         * @param {Object} cellProperties
         */
        beforeGetCellMeta: { (...p: any[]): any }[];

        /**
         * @event Handsontable.Hooks#beforeAutofill
         * @param {Object} start Object containing information about first filled cell: `{row: 2, col: 0}`
         * @param {Object} end Object containing information about last filled cell: `{row: 4, col: 1}`
         * @param {Array} data 2D array containing information about fill pattern: `[["1", "Ted"], ["1", "John"]]`
         */
        beforeAutofill: { (...p: any[]): any }[];

        /**
         * Callback fired before keydown event is handled. It can be used to overwrite default key bindings.
         * Caution - in your `beforeKeyDown` handler you need to call `event.stopImmediatePropagation()` to prevent default key behavior.
         *
         * @event Handsontable.Hooks#beforeKeyDown
         * @since 0.9.0
         * @param {Object} event Original DOM event
         */
        beforeKeyDown: { (...p: any[]): any }[];

        /**
         * @event Handsontable.Hooks#beforeOnCellMouseDown
         */
        beforeOnCellMouseDown: { (...p: any[]): any }[];

        /**
         * @event Handsontable.Hooks#beforeTouchScroll
         */
        beforeTouchScroll: { (...p: any[]): any }[];

        /**
         * Callback fired after Handsontable instance is initiated.
         *
         * @event Handsontable.Hooks#afterInit
         */
        afterInit: { (...p: any[]): any }[];

        /**
         * Callback fired after new data is loaded (by `loadData` method) into the data source array.
         *
         * @event Handsontable.Hooks#afterLoadData
         */
        afterLoadData: { (...p: any[]): any }[];

        /**
         * @event Handsontable.Hooks#afterLoadData
         */
        afterUpdateSettings: { (...p: any[]): any }[];

        /**
         * Callback fired after Handsontable table is rendered.
         *
         * @event Handsontable.Hooks#afterRender
         * @param {Boolean} isForced Is `true` if rendering was triggered by a change of settings or data; or `false` if
         *                           rendering was triggered by scrolling or moving selection.
         */
        afterRender: { (...p: any[]): any }[];

        /**
         * @event Handsontable.Hooks#afterRenderer
         * @since 0.11
         * @param {Object} TD
         * @param {Number} row
         * @param {Number} col
         * @param {String} prop
         * @param {String} value
         * @param {Object} cellProperties
         */
        afterRenderer: { (...p: any[]): any }[];

        /**
         * @description
         * Callback fired after one or more cells is changed. Its main use case is to save the input.
         *
         * __Note:__ For performance reasons, the `changes` array is null for `"loadData"` source.
         *
         * @event Handsontable.Hooks#afterChange
         * @param {Array} changes 2D array containing information about each of the edited cells `[[row, prop, oldVal, newVal], ...]`
         * @param {String} source Is one of the strings: `"alter", "empty", "edit", "populateFromArray", "loadData", "autofill", "paste"`.
         */
        afterChange: { (...p: any[]): any }[];

        /**
         * @description
         * A plugin hook executed after validator function, only if validator function is defined.
         * Validation result is the first parameter. This can be used to determinate if validation passed successfully or not.
         *
         * __You can cancel current change by returning false.__
         *
         * @event Handsontable.Hooks#afterValidate
         * @since 0.9.5
         * @param {Boolean} isValid
         * @param {*} value
         * @param {Number} row
         * @param {String} prop
         * @param {String} source
         */
        afterValidate: { (...p: any[]): any }[];

        /**
         * Callback fired after getting cell settings.
         *
         * @event Handsontable.Hooks#afterGetCellMeta
         * @param {Number} row
         * @param {Number} col
         * @param {Object} cellProperties
         */
        afterGetCellMeta: { (...p: any[]): any }[];

        /**
         * Called after cell meta was changed, e.g. using the context menu.
         *
         * @event Handsontable.Hooks#afterSetCellMeta
         * @since 0.11.0
         * @param {Number} row
         * @param {Number} col
         * @param {String} key
         * @param {*} value
         */
        afterSetCellMeta: { (...p: any[]): any }[];

        /**
         * Callback fired after getting info about column header.
         *
         * @event Handsontable.Hooks#afterGetColHeader
         * @param {Number} col
         * @param {Element} TH
         */
        afterGetColHeader: { (...p: any[]): any }[];

        /**
         * @event Handsontable.Hooks#afterGetRowHeader
         */
        afterGetRowHeader: { (...p: any[]): any }[];

        /**
         * Callback fired after destroing Handsontable instance.
         *
         * @event Handsontable.Hooks#afterDestroy
         */
        afterDestroy: { (...p: any[]): any }[];

        /**
         * Callback is fired when one or more rows are removed.
         *
         * @event Handsontable.Hooks#afterRemoveRow
         * @param {Number} index Is an index of starter row.
         * @param {Number} amount Is an anount of removed rows.
         */
        afterRemoveRow: { (...p: any[]): any }[];

        /**
         * Callback is fired when a new row is created.
         *
         * @event Handsontable.Hooks#afterCreateRow
         * @param {Number} index Represents the index of first newly created row in the data source array.
         * @param {Number} amount Number of newly created rows in the data source array.
         */
        afterCreateRow: { (...p: any[]): any }[];

        /**
         * Callback is fired when one or more columns are removed.
         *
         * @event Handsontable.Hooks#afterRemoveCol
         * @param {Number} index Is an index of starter column.
         * @param {Number} amount Is an amount of removed columns.
         */
        afterRemoveCol: { (...p: any[]): any }[];

        /**
         * Callback is fired when a new column is created.
         *
         * @event Handsontable.Hooks#afterCreateCol
         * @param {Number} index Represents the index of first newly created column in the data source array.
         * @param {Number} amount Number of newly created columns in the data source array.
         */
        afterCreateCol: { (...p: any[]): any }[];

        /**
         * Event called when current cell is deselected.
         *
         * @event Handsontable.Hooks#afterDeselect
         */
        afterDeselect: { (...p: any[]): any }[];

        /**
         * Callback fired while one or more cells are being selected (on mouse move).
         *
         * @event Handsontable.Hooks#afterSelection
         * @param {Number} r Selection start row
         * @param {Number} c Selection start column
         * @param {Number} r2 Selection end row
         * @param {Number} c2 Selection end column
         */
        afterSelection: { (...p: any[]): any }[];

        /**
         * The same as above, but data source object property name is used instead of the column number.
         *
         * @event Handsontable.Hooks#afterSelectionByProp
         * @param {Number} r Selection start row
         * @param {String} p Selection start data source object property
         * @param {Number} r2 Selection end row
         * @param {String} p2 Selection end data source object property
         */
        afterSelectionByProp: { (...p: any[]): any }[];

        /**
         * Callback fired after one or more cells are selected (on mouse up).
         *
         * @event Handsontable.Hooks#afterSelectionEnd
         * @param {Number} r Selection start row
         * @param {Number} c Selection start column
         * @param {Number} r2 Selection end row
         * @param {Number} c2 Selection end column
         */
        afterSelectionEnd: { (...p: any[]): any }[];

        /**
         * The same as above, but data source object property name is used instead of the column number.
         *
         * @event Handsontable.Hooks#afterSelectionEndByProp
         * @param {Number} r Selection start row
         * @param {String} p Selection start data source object property
         * @param {Number} r2 Selection end row
         * @param {String} p2 Selection end data source object property
         */
        afterSelectionEndByProp: { (...p: any[]): any }[];

        /**
         * Callback fired after clicking on a cell or row/column header.
         * In case the row/column header was clicked, the index is negative.
         * For example clicking on the row header of cell (0, 0) results with `afterOnCellMouseDown` called with coords `{row: 0, col: -1}`.
         *
         * @event Handsontable.Hooks#afterOnCellMouseDown
         * @since 0.11
         * @param {Object} event
         * @param {Object} coords
         * @param {Object} TD
         */
        afterOnCellMouseDown: { (...p: any[]): any }[];

        /**
         * Callback fired after hovering a cell or row/column header with the mouse cursor.
         * In case the row/column header was hovered, the index is negative.
         * For example clicking on the row header of cell (0, 0) results with `afterOnCellMouseOver` called with coords `{row: 0, col: -1}`.
         *
         * @event Handsontable.Hooks#afterOnCellMouseOver
         * @since 0.11
         * @param {Object} event
         * @param {Object} coords
         * @param {Object} TD
         */
        afterOnCellMouseOver: { (...p: any[]): any }[];

        /**
         * @event Handsontable.Hooks#afterOnCellCornerMouseDown
         * @since 0.11
         * @param {Object} event
         */
        afterOnCellCornerMouseDown: { (...p: any[]): any }[];

        /**
         * @event Handsontable.Hooks#afterScrollVertically
         * @since 0.11
         */
        afterScrollVertically: { (...p: any[]): any }[];

        /**
         * @event Handsontable.Hooks#afterScrollHorizontally
         * @since 0.11
         */
        afterScrollHorizontally: { (...p: any[]): any }[];

        /**
         * Callback fired after reset cell's meta.
         *
         * @event Handsontable.Hooks#afterCellMetaReset
         * @since 0.11
         */
        afterCellMetaReset: { (...p: any[]): any }[];

        /**
         * @event Handsontable.Hooks#afterIsMultipleSelectionCheck
         */
        afterIsMultipleSelectionCheck: { (...p: any[]): any }[];

        /**
         * @event Handsontable.Hooks#afterDocumentKeyDown
         */
        afterDocumentKeyDown: { (...p: any[]): any }[];

        /**
         * @event Handsontable.Hooks#afterMomentumScroll
         */
        afterMomentumScroll: { (...p: any[]): any }[];
        beforeCellAlignment: { (...p: any[]): any }[];

        /**
         * Callback fired after modify column's width.
         *
         * @event Handsontable.Hooks#modifyColWidth
         * @since 0.11
         * @param {Number} width
         * @param {Number} col
         */
        modifyColWidth: { (...p: any[]): any }[];

        /**
         * Callback fired after modify height of row.
         *
         * @event Handsontable.Hooks#modifyRowHeight
         * @since 0.11
         * @param {Number} height
         * @param {Number} row
         */
        modifyRowHeight: { (...p: any[]): any }[];

        /**
         * Callback fired after row modify.
         *
         * @event Handsontable.Hooks#modifyRow
         * @since 0.11
         * @param {Number} row
         */
        modifyRow: { (row: number): any }[];

        /**
         * Callback fired after column modify.
         *
         * @event Handsontable.Hooks#modifyCol
         * @since 0.11
         * @param {Number} col
         */
        modifyCol: { (col: number): any }[];
    }

    interface PluginHookClass {

        hooks: Hooks;

        /**
       * Get hook bucket based on Handsontable instance or if instance is `undefined` get global hook bucked.
       *
       * @memberof Handsontable.Hooks#
       * @function getBucket
       * @param {Object} instance Instance of Handsontable
       * @returns {Object} Returns global or handsontable instance bucket
       */
        getBucket(instance: Handsontable): any;

        /**
        * @memberof Handsontable.Hooks#
        * @function add
        * @param {String} key Hook/Event name
        * @param {Function} fn Callback function
        * @param {Object} instance Instance of Handsontable
        * @returns {Handsontable.Hooks} Instance of Handsontable.Hooks
        */
        add(key: string, fn: (...arg: any[]) => any, instance: Handsontable): void;

        /**
       * @memberof Handsontable.Hooks#
       * @function once
       * @param {String} key Hook/Event name
       * @param {Function} fn Callback function
       * @param {Object} instance of Handsontable
       */
        once(key: string, fn: (...arg: any[]) => any, instance: Handsontable): void;

        /**
       * @memberof Handsontable.Hooks#
       * @function remove
       * @param {String} key Hook/Event name
       * @param {Function} fn Callback function
       * @param {Object} instance of Handsontable
       * @return {Boolean}
       */
        remove(key: string, fn: (...arg: any[]) => any, instance: Handsontable): void;

        /**
       * @memberof Handsontable.Hooks#
       * @function run
       * @param {Object} instance of Handsontable
       * @param {String} key Hook/Event name
       * @param {*} p1
       * @param {*} p2
       * @param {*} p3
       * @param {*} p4
       * @param {*} p5
       * @param {*} p6
       * @returns {*}
       */
        run(instance: Handsontable, key: any, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any, p6?: any): any;

        destroy(instance: Handsontable): void;
    }

    interface HtDom {
        enableImmediatePropagation(event: Event): void;

        /*
         * Goes up the DOM tree (including given element) until it finds an element that matches the nodeName
         */
        closest(elem: HTMLElement, nodeNames: string[], until: HTMLElement): HTMLElement;

        /**
        * Goes up the DOM tree and checks if element is child of another element
        * @param child Child element
        * @param {Object|string} parent Parent element OR selector of the parent element. If classname provided, function returns true for the first occurance of element with that class.
        * @returns {boolean}
        */
        isChildOf(child: HTMLElement, parent: HTMLElement): boolean;

        /**
        * Check if an element is part of `hot-table` web component.
        *
        * @param {Element} element
        * @returns {Boolean}
        */
        isChildOfWebComponentTable(element: HTMLElement): boolean;

        /**
        * Counts index of element within its parent
        * WARNING: for performance reasons, assumes there are only element nodes (no text nodes). This is true for Walkotnable
        * Otherwise would need to check for nodeType or use previousElementSibling
        * @see http://jsperf.com/sibling-index/10
        * @param {Element} elem
        * @return {Number}
        */
        index(element: HTMLElement): number;

        hasClass(element: HTMLElement, cls: string): boolean;

        addClass(element: HTMLElement, cls: string): void;

        removeClass(element: HTMLElement, cls: string): void;

        removeTextNodes(element: HTMLElement, parent: HTMLElement): void;

        /**
        * Remove childs function
        * WARNING - this doesn't unload events and data attached by jQuery
        * http://jsperf.com/jquery-html-vs-empty-vs-innerhtml/9
        * http://jsperf.com/jquery-html-vs-empty-vs-innerhtml/11 - no siginificant improvement with Chrome remove() method
        * @param element
        * @returns {void}
        */
        empty(element: HTMLElement): void;

        HTML_CHARACTERS: string;

        fastInnerHTML(element: HTMLElement, content: string): void;

        /**
        * Insert text content into element
        * @return {void}
        */
        fastInnerText(element: HTMLElement, content: string): void;

        /**
        * Returns true if element is attached to the DOM and visible, false otherwise
        * @param elem
        * @returns {boolean}
        */
        isVisible(element: HTMLElement): boolean;

        /**
        * Returns elements top and left offset relative to the document. Function is not compatible with jQuery offset.
        *
        * @param {HTMLElement} elem
        * @return {Object} Returns object with `top` and `left` props
        */
        offset(element: HTMLElement): { left: number; top: number };

        getWindowScrollTop(): number;

        getWindowScrollLeft(): number;

        getScrollTop(element: HTMLElement): number;

        getScrollLeft(element: HTMLElement): number;

        getScrollableElement(element: HTMLElement): HTMLElement | Window;

        getComputedStyle(element: HTMLElement): CSSStyleDeclaration | any;

        outerWidth(element: HTMLElement): number;

        outerHeight(element: HTMLElement): number;

        innerWidth(element: HTMLElement): number;

        innerHeight(element: HTMLElement): number;

        addEvent(element: HTMLElement, event: string, callback): void;
        removeEvent(element: HTMLElement, event: string, callback): void;

        hasCaptionProblem(): boolean;

        /**
        * Returns caret position in text input
        * @author http://stackoverflow.com/questions/263743/how-to-get-caret-position-in-textarea
        * @return {Number}
        */
        getCaretPosition(element: HTMLElement): number;

        /**
       * Returns end of the selection in text input
       * @return {Number}
       */
        getSelectionEndPosition(element: HTMLElement): number;

        /**
      * Sets caret position in text input
      * @author http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
      * @param {Element} el
      * @param {Number} pos
      * @param {Number} endPos
      */
        setCaretPosition(element: HTMLElement, pos: number, endPos: number): void;

        /**
        * Returns the computed width of the native browser scroll bar
        * @return {Number} width
        */
        getScrollbarWidth(): number;

        isIE8: boolean;

        isIE9: boolean;

        isSafari: boolean;

        setOverlayPosition(overlayElem: HTMLElement, left: number, top: number): void;

        getCssTransform(element: HTMLElement): any;

        resetCssTransform(element: HTMLElement): void;
    }

    /****************************************************************************
     *                              EDITORS
     ****************************************************************************/
    interface Editors {
        registerEditor(editorName: string, editorClass: Function): void;
        getEditor(editorName: string, hotInstance: Handsontable): any;
        BaseEditor: BaseEditor;
        TextEditor: TextEditor;
        MobileTextEditor: MobileTextEditor;
        CheckboxEditor: CheckboxEditor;
        DateEditor: DateEditor;
        HandsontableEditor: HandsontableEditor;
        AutocompleteEditor: AutocompleteEditor;
        SelectEditor: SelectEditor;
        DropdownEditor: DropdownEditor;
        NumericEditor: NumericEditor;
    }

    export class BaseEditor {
        prototype: any;
        TD: HTMLTableDataCellElement;
        row: number;
        col: number;
        prop: any;
        originalValue: any;
        cellProperties: any;
        state: string;

        getValue(): any;
        setValue(newValue: any): void;
        open(): void;
        close(): void;
        prepare(row: number, col: number, prop: any, td: HTMLTableDataCellElement, originalValue: any, cellProperties: any): void;
        extend(...args: any[]): any;
        saveValue(newValue: any, ctrlDown: boolean);
        beginEditing(initialValue: any, event: any);
        finishEditing(restoreOriginalValue: boolean, ctrlDown: boolean, callback: (result: any) => void);
        cancelChanges(): void;
        discardEditor(result: any): any;
        isOpened(): boolean;
        isWaiting(): boolean;

    }

    export class TextEditor extends BaseEditor {
        public TEXTAREA: HTMLTextAreaElement;
        public TEXTAREA_PARENT: HTMLElement;
        public textareaStyle: any;
        focus(): void;
        createElements(): void;
        getEditedCell(): HTMLTableDataCellElement;
        refreshDimensions(): void;
    }

    export class MobileTextEditor extends BaseEditor {
        // TODO
    }

    export class CheckboxEditor extends BaseEditor {
        // TODO
    }

    export class DateEditor extends TextEditor {
        // TODO
    }

    export class HandsontableEditor extends TextEditor {
        // TODO
    }

    export class AutocompleteEditor extends HandsontableEditor {
        // TODO
    }

    export class PasswordEditor extends TextEditor {
        // TODO
    }

    export class SelectEditor extends BaseEditor {
        // TODO
    }

    export class DropdownEditor extends AutocompleteEditor {
        // TODO
    }

    export class NumericEditor extends TextEditor {
        // TODO
    }

    /************************************************************************************
     *                                  RENDERERS
     ************************************************************************************/
    interface Renderers {
        TextRenderer: TextRenderer;
        NumericRenderer: NumericRenderer;
        CheckboxRenderer: CheckboxRenderer;
        HtmlRenderer: HtmlRenderer;
        AutocompleteRenderer: AutocompleteRenderer;
        cellDecorator: CellDecorator;        
    }

    export interface CellDecorator extends Function {
    }

    export interface TextRenderer extends Function {
    }

    export interface NumericRenderer extends Function {
    }

    export interface CheckboxRenderer extends Function {
    }

    export interface AutocompleteRenderer extends Function {
    }

    export interface HtmlRenderer extends Function {
    }

    export interface Comments {
        checkSelectionCommentsConsistency(): boolean;
        removeComment(row: number, col: number): void;
        showComment(range: WalkontableCellRange): void;
    }
} 