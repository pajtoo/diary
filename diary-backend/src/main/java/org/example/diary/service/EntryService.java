package org.example.diary.service;

import org.example.diary.dto.EntryDTO;

import java.util.List;

public interface EntryService {

    List<EntryDTO> getEntries();

    EntryDTO createEntry(EntryDTO entryDTO);

    void deleteEntry(long id);
}
