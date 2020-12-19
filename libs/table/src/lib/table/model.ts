export interface TableColumn {
  name: string;
  key: string;
  onClick?(): any;
  dataType?: 'normalText' | 'date' | 'currency' | 'pill';
  currencyCode?: string;
  columnType?: 'action' | 'normal';
  pillType?: 'success' | 'danger' | 'warn';
  columnActions?: ColumnAction[]
}

interface ColumnAction {
  name: 'delete' | 'edit' | 'cancel' | 'approve';
  onDelete?(): any;
  onEdit?(): any;
  onCancel?(): any;
  onApprove?(): any
}