package com.example.testapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

import java.util.List;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState)
        {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_main);

            PackageManager pm = getPackageManager();
            List<ApplicationInfo> appInfoList
                    = pm.getInstalledApplications(PackageManager.GET_META_DATA);
        for(ApplicationInfo appInfo : appInfoList){
            Log.i("MainActivity", "debug label : " + pm.getApplicationLabel(appInfo));
            Log.i("MainActivity", "debug package name : " + appInfo.packageName);
        }
    }
}