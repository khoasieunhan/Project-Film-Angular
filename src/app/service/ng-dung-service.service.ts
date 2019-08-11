import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgDungServiceService {

  constructor(private _http: Http) { }

  public LayDanhSachNguoiDung(): Observable<any> {
    const obServable = this._http.get(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`)
      .pipe(map((result: Response) => result.json()));
    return obServable;
  }

  public LayDanhSachNguoiDungGB2(): Observable<any> {
    const obServable = this._http.get(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP02`)
      .pipe(map((result: Response) => result.json()));
    return obServable;
  }

  public LayDSLoaiNguoiDung(): Observable<any> {
    const observable = this._http.get(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`)
      .pipe(map((result: Response) => result.json()));
    return observable;
  }

  public DangNhap(taikhoan: string, matkhau: string): Observable<any> {
    const apiURL = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?TaiKhoan=${taikhoan}&MatKhau=${matkhau}`;
    const header = new Headers();
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this._http.post(apiURL, null, { headers: header })
      .pipe(map((res: Response) => res.json()));
    return observable;
  }

  public DangKy(nguoiDung: any, maLoai: any): Observable<any> {
    const apiURL = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    const header = new Headers();
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this._http.post(apiURL, nguoiDung, { headers: header })
    .pipe(map((res: Response) => res.json()));
  return observable;
  }

  public XoaNgDung(TaiKhoan: any): Observable<any> {
    const observable = this._http.delete(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${TaiKhoan}`)
      .pipe(map((result: Response) => result.json()));
    return observable;
  }

  public CapNhatNguoiDung(nguoiDung: any): Observable<any> {
    const apiURL = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin`;
    const header = new Headers();
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this._http.post(apiURL, nguoiDung, { headers: header })
    .pipe(map((res: Response) => res.json()));
  return observable;
  }

  public HistoryTicket(TaiKhoan: any): Observable<any> {
    const apiDatVe = `http://svcy2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${TaiKhoan}`;
    const header = new Headers();
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this._http.post(apiDatVe, TaiKhoan, { headers: header })
    .pipe(map((res: Response) => res.json()));
    return observable;
  }
}
