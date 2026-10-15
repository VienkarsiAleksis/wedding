<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/wedding.ics', function () {

    $start = '20260920T140000Z'; // 4PM local (adjust if needed)
    $end   = '20260920T200000Z';

    $ics = "BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding//Invite//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
UID:wedding-2026@example.com
DTSTAMP:20260514T120000Z
DTSTART:$start
DTEND:$end
SUMMARY:Sabīne & Renārs Wedding
LOCATION:The Garden Estate, Napa Valley
DESCRIPTION:You are invited to our wedding 💍
END:VEVENT
END:VCALENDAR";

    return Response::make($ics, 200, [
        'Content-Type' => 'text/calendar; charset=utf-8',
        'Content-Disposition' => 'attachment; filename="wedding.ics"',
    ]);
});

require __DIR__.'/auth.php';
