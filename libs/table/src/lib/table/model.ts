export interface TableColumn {
  name: string;
  key: string;
  onClick?(): any;
  dataType?: 'normalText' | 'date' | 'currency';
  currencyCode?: string;
  columnType?: 'action' | 'normal';
  columnActions?: ColumnAction[]
}

interface ColumnAction {
  name: 'delete' | 'edit' | 'cancel' | 'approve';
  onDelete?(): any;
  onEdit?(): any;
  onCancel?(): any;
  onApprove?(): any
}