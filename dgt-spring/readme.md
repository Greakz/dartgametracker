Suggested Structure:
```
src
    main
        java
            com.example.springboot
                config // Spring & Security Configuration
                    - JwtAuthenticationEntryPoint
                    - JwtRequestFilter
                    - JwtTokenUtil
                    - WebSecurtyConfig
                    - ...
                controller // Incoming Request Processing
                    authentication
                        - JwtAuthenticationController
                        - JwtAuthenticatonRequest
                        - JwtAuthenticationResponse
                        - ...
                    ...
                entity // Data
                    carry // Data Wrapper
                        - ...
                    database // Data Access Objects
                        - UserAccount
                        - UserAccountRepository
                        - ...
                    facade // Data Facades
                        - ...
                service
                    - JwtUserDetailsService
                    - ...
                - Application
                - ...
        resources
            application.properties
```