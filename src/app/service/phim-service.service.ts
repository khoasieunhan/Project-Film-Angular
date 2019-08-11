import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhimServiceService {
  headers;
  constructor(private _http: Http) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Authorization');
  }

  LayDanhSachPhim(): Observable<any> {
    const obServable = this._http.get(`http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP02`)
      .pipe(map((result: Response) => result.json()));
    return obServable;
  }

  LayDanhSachPhimSC(): Observable<any> {
    const obServable = this._http.get(`http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP01`)
      .pipe(map((result: Response) => result.json()));
    return obServable;
  }

  LayChiTietPhim(maPhim): Observable<any> {
    const observable = this._http.get(`http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`)
      .pipe(map((res: Response) => res.json()));
    return observable;
  }

  LayDanhSachGhe(MaLichChieu: string): Observable<any> {
    const apiLichChieu = `http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${MaLichChieu}`;
    const observable = this._http.get(apiLichChieu)
      .pipe(map((res: Response) => res.json()));
    return observable;
  }

  DatVe(ve: any): Observable<any> {
    const apiDatVe = `http://svcy2.myclass.vn/api/QuanLyDatVe/DatVe`;
    const header = new Headers();
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this._http.post(apiDatVe, ve, { headers: header })
      .pipe(map((res: Response) => res.json()));
    return observable;
  }

  XoaPhim(MaPhim: any): Observable<any> {
    const observable = this._http.delete(`http://svcy2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${MaPhim}`)
      .pipe(map((res: Response) => res.json()));
    return observable;
  }

  CapNhatPhim(phim: any): Observable<any> {
    const apiDatVe = `http://svcy2.myclass.vn/api/QuanLyPhim/CapNhatPhim`;
    const header = new Headers();
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this._http.post(apiDatVe, phim, { headers: header })
      .pipe(map((res: Response) => res.json()));
    return observable;
  }

  postFile(file: File, TenPhim): Observable<boolean> {
    const endpoint = `http://svcy2.myclass.vn/api/QuanLyPhim/UploadFile`;
    const header: Headers = new Headers();
    // tslint:disable-next-line:prefer-const
    let formData: FormData = new FormData();
    formData.append('Files', file),
    formData.append('TenPhim', TenPhim),

    header.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');

    const obServable = this._http.post(endpoint, formData)
      .pipe(map((res: Response) => res.json()));
    console.log(obServable);
    return obServable;
  }

  UpPostFile(file: File, TenPhim): Observable<boolean> {
    const endpoint = `http://svcy2.myclass.vn/api/QuanLyPhim/UploadFile`;
    const header: Headers = new Headers();
    // tslint:disable-next-line:prefer-const
    let formData: FormData = new FormData();
    formData.append('Files', file),
    formData.append('TenPhim', TenPhim),

    header.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');

    const obServable = this._http.post(endpoint, formData)
      .pipe(map((res: Response) => res.json()));
    console.log(obServable);
    return obServable;
  }

  ThemPhimMoi(phim: any): Observable<any> {
    const apiDatVe = `http://svcy2.myclass.vn/api/QuanLyPhim/ThemPhimMoi`;
    const header = new Headers();
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this._http.post(apiDatVe, phim, { headers: header })
      .pipe(map((res: Response) => res.json()));
    return observable;
  }

}
