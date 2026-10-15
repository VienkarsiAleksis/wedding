import { Calendar, MapPin, Clock, Heart } from "lucide-react";
import { Countdown } from "@/Components/Countdown";

export default function Welcome() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
            <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
                <div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                    className="mb-8"
                >
                    <Heart className="w-16 h-16 mx-auto text-rose-400 fill-rose-400" />
                </div>
                <p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-rose-600 tracking-[0.3em] uppercase mb-6"
                >
                    Tu tiec ielūgts
                </p>

                <h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-6xl md:text-8xl mb-4 text-gray-800 text-center"
                    style={{ fontFamily: "serif" }}
                >
                    Sabīne & Renārs
                </h1>

                <div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="w-24 h-px bg-rose-300 mx-auto mb-8"
                />

                <p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="text-2xl text-gray-600 mb-12"
                >
                    BEIDZOT PRECĀS!
                </p>
                <div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className="space-y-2 text-gray-700"
                >
                    <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5 text-rose-500" />
                    <span>Saturday, September 20, 2026</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                    <Clock className="w-5 h-5 text-rose-500" />
                    <span>4:00 PM</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5 text-rose-500" />
                    <span>The Garden Estate, Napa Valley</span>
                    </div>
                </div>
                <div class="addeventatc mt-10 flex" data-styling="none">
                    <div class="date">
                        <span class="mon">May</span>
                        <span class="day">28</span>
                        <div class="bdr1"></div>
                        <div class="bdr2"></div>
                    </div>
                    <div class="desc">
                        <p>
                            <strong class="hed">The Rolling Stones</strong>
                            <span class="des">Location: The Lost Church<br />When: 9 PM - 11 PM</span>
                        </p>
                    </div>
                    <span class="start">05/28/2026 09:00 AM</span>
                    <span class="end">05/28/2026 11:00 AM</span>
                    <span class="timezone">Europe/Paris</span>
                    <span class="title">Summary of the event</span>
                    <span class="description">Description of the event</span>
                    <span class="location">Location of the event</span>
                </div>
            </div>
            <Countdown />
        </div>
    );
}