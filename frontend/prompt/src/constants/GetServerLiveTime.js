import React from 'react'
import { useAuth } from '../context/AuthProvider'

export default function GetServerLiveTime() {
    const auth = useAuth();
    if (!auth) return null;
    const { settings, startTime } = auth;
    const serverTime = new Date(settings.storeCurrentTime);
    const adjustedTime = new Date(serverTime.getTime() + (Date.now() - startTime));
 
    return adjustedTime;
  }
  
