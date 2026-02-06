import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const cwd = process.cwd();
    const dataPath = path.join(cwd, 'src/data');
    const postsFile = path.join(dataPath, 'posts.json');

    const debugInfo = {
        cwd,
        dataPath,
        postsFile,
        dataPathExists: fs.existsSync(dataPath),
        postsFileExists: fs.existsSync(postsFile),
        cwdContents: [],
        dataContents: [],
        env: process.env.NODE_ENV,
        adminPasswordSet: !!process.env.ADMIN_PASSWORD
    };

    try {
        if (fs.existsSync(cwd)) {
            // @ts-ignore
            debugInfo.cwdContents = fs.readdirSync(cwd);
        }
        if (fs.existsSync(dataPath)) {
            // @ts-ignore
            debugInfo.dataContents = fs.readdirSync(dataPath);
        }
    } catch (e: any) {
        // @ts-ignore
        debugInfo.error = e.message;
    }

    return NextResponse.json(debugInfo);
}
