// src/pages/settings.tsx

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Settings() {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold mb-6">Settings</h1>

            {/* Profile Settings */}
            <Card>
                <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <Button className="mt-4">Update Profile</Button>
                </CardContent>
            </Card>

            {/* Password Settings */}
            <Card>
                <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                    </div>
                    <div>
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                    </div>
                    <div>
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" />
                    </div>
                    <Button className="mt-4">Change Password</Button>
                </CardContent>
            </Card>


        </div>
    );
}
