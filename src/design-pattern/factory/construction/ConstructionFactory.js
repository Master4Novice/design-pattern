import DailyWorkExpense from './daily/DailyWorkExpense';
import LoadingExpense from './loading/LoadingExpense';
import MaterialExpense from './material/MaterialExpense';

export default class ConstructionFactory {
  addTypeOfExpense(type, props) {
    switch (type) {
      case 'loading':
        return new LoadingExpense(props);
      case 'material':
        return new MaterialExpense(props);
      case 'daily':
        return new DailyWorkExpense(props);
    }
  }
}
