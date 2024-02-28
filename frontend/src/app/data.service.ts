import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCurrentWeekLeaderboardData() {
    return this.http.get<any[]>(
      'https://blacklight-assignment-jwtj.onrender.com/currentWeekLeaderboard'
    );
  }

  getLastWeekLeaderboardData(countryCode: string): Observable<any[]> {
    const body = { country: countryCode };
    return this.http.post<any[]>(
      'https://blacklight-assignment-jwtj.onrender.com/lastWeekLeaderboardByCountry',
      body
    );
  }

  getUserFromUid(uid: string): Observable<any[]> {
    const body = { uid: uid };
    return this.http.post<any[]>(
      'https://blacklight-assignment-jwtj.onrender.com/userLeaderboardRank',
      body
    );
  }
}
