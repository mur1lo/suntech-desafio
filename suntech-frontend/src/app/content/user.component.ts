import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {User} from './user.model'
import {UserDialogComponent} from './user-dialog.component';
import {UserService} from './user.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  displayedColumns = ['id', 'name', 'surName', 'email', 'phone', 'userName', 'registerDate', 'enabled', 'password', 'actionsColumn'];
  dataSource = null;

  listaUser: User[];
  termoBusca: string;

  constructor(private dialog: MatDialog, private userService: UserService) {
  }

  ngOnInit() {
    this.findAllUsers();
  };

  findAllUsers() {
    this.userService.getUsers()
      .subscribe(data => {
        this.listaUser = data;
        this.dataSource = new MatTableDataSource<User>(this.listaUser);
        this.setPagSort();
      });

  }

  openDialog(user: User) {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.findAllUsers();
    });
  }

  /**************************************************************************************************/
  /**************************************************************************************************/

  /**************************************************************************************************/
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  setPagSort() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate =
      (data: User, filter: string) =>
        data.userName.trim().toLowerCase().indexOf(filter) != -1
        || data.name.trim().toLowerCase().indexOf(filter) != -1
        || data.email.trim().toLowerCase().indexOf(filter) != -1;
  }
}
