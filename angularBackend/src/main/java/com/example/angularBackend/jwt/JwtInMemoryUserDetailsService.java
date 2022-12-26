package com.example.angularBackend.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

  static {
    inMemoryUserList.add(new JwtUserDetails(1L, "fazalJWT",
            "$2a$10$qAMq11eoER7Zk0C8t07Psu1LBfuKa8YIJ5tB0HYjzMRXSEkf37kZS", "ROLE_USER_2"));
    inMemoryUserList.add(new JwtUserDetails(2L, "HaroonJwtExpert",
            "$2a$10$B7cePdC/9fH6fLL8RSN08.Ua5haT9p8FZKHUrtx9W9TuoSMoWtxzW", "ROLE_USER_2"));

  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
            .filter(user -> user.getUsername().equals(username)).findFirst();

    if (!findFirst.isPresent()) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }

    return findFirst.get();
  }

}