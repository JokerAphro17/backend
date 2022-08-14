<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        

        // crete a fake usuer with a random uuid

        $users = [
            'uuid' => Str::uuid(),
            'lastname' => $this->faker->lastName,
            'firstname' => $this->faker->firstName,
            'telephone' => $this->faker->phoneNumber,
            'avatar' => $this->faker->imageUrl(),
            'email' => $this->faker->unique()->safeEmail,
            'role' => rand(0,1) ? 'user' : 'admin',
            'code_verified' => null,
            'email_verified_at' => now(),
            'last_login' => now(),
            'password' => bcrypt('secret'),
            'remember_token' => Str::random(10),
            'created_at' => now(),
            'updated_at' => now(),
        ];
        
               
                User::create($users);
    }
}
